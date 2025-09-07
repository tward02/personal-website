'use client';

import { useState } from "react";
import styles from "./contactForm.module.css";

export default function ContactForm() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    // switch to using tanstack useQuery
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            if (res.ok) {
                setStatus("Message sent successfully!");
                setMessage("");
            } else {
                setStatus("Failed to send message.");
            }
        } catch (err) {
            console.error(err);
            setStatus("An error occurred.");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contact Me</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
            name="message"
            placeholder="Type your message here..."
            rows={6}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
        />
                <button type="submit" className={styles.button}>
                    Send Message
                </button>
            </form>
            {status && <p className={styles.status}>{status}</p>}
        </div>
    );
}
