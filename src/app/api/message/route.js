import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const {message} = await req.json();
        console.log(message);

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL,
            subject: "New Message from Website",
            text: message,
        });

        return new Response(JSON.stringify({success: true}), {status: 200});
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({success: false, error: err.message}), {status: 500});
    }
}
