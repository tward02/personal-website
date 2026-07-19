const MAX_LENGTHS = {name: 200, email: 320, message: 5000};
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT = {windowMs: 10 * 60 * 1000, max: 5};

const recentRequests = new Map();

const cleanField = (value, maxLength) =>
    typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLength) : "";

const isRateLimited = (ip) => {
    const now = Date.now();
    const hits = (recentRequests.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
    hits.push(now);
    recentRequests.set(ip, hits);

    if (recentRequests.size > 1000) {
        for (const [key, times] of recentRequests) {
            if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) {
                recentRequests.delete(key);
            }
        }
    }

    return hits.length > RATE_LIMIT.max;
};

export async function POST(req) {
    let body;
    try {
        body = await req.json();
    } catch {
        return Response.json({success: false, error: "Invalid request body"}, {status: 400});
    }

    // Honeypot: real users never fill this field, so silently accept and drop
    if (body.website) {
        return Response.json({success: true});
    }

    const name = cleanField(body.name, MAX_LENGTHS.name);
    const email = cleanField(body.email, MAX_LENGTHS.email);
    const message = typeof body.message === "string"
        ? body.message.trim().slice(0, MAX_LENGTHS.message)
        : "";

    if (!name || !message || !EMAIL_PATTERN.test(email)) {
        return Response.json(
            {success: false, error: "A name, valid email and message are required"},
            {status: 400},
        );
    }

    const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
    if (isRateLimited(ip)) {
        return Response.json(
            {success: false, error: "Too many messages, please try again later"},
            {status: 429},
        );
    }

    try {
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: `Website Contact <${process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"}>`,
                to: [process.env.CONTACT_RECEIVER_EMAIL],
                reply_to: `${name} <${email}>`,
                subject: `Website message from ${name}`,
                text: `From: ${name} <${email}>\n\n${message}`,
            }),
        });

        if (!res.ok) {
            console.error("Resend API error:", res.status, await res.text());
            return Response.json({success: false, error: "Failed to send message"}, {status: 500});
        }

        return Response.json({success: true});
    } catch (err) {
        console.error("Failed to send contact email:", err);
        return Response.json({success: false, error: "Failed to send message"}, {status: 500});
    }
}
