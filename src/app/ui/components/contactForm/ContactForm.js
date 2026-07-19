'use client';

import {useState} from "react";
import styles from "./contactForm.module.css";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [website, setWebsite] = useState("");
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/message", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, email, message, website}),
            });

            if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contact</h1>
            <p className={styles.intro}>
                Have a question or want to work together? Send me a message and I&apos;ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
                {/* Honeypot: hidden from real users, bots fill it and get silently dropped */}
                <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className={styles.honeypot}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                />
                <label className={styles.field}>
                    <span>Name</span>
                    <input
                        type="text"
                        name="name"
                        required
                        maxLength={200}
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                    />
                </label>

                <label className={styles.field}>
                    <span>Email</span>
                    <input
                        type="email"
                        name="email"
                        required
                        maxLength={320}
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                    />
                </label>

                <label className={styles.field}>
                    <span>Message</span>
                    <textarea
                        name="message"
                        rows={6}
                        required
                        maxLength={5000}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={styles.textarea}
                    />
                </label>

                <button type="submit" className={styles.button} disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send message"}
                </button>
            </form>

            <p className={styles.status} role="status">
                {status === "success" && "Thanks — your message has been sent."}
                {status === "error" && "Something went wrong sending your message. Please try again."}
            </p>
        </div>
    );
}
