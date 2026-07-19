import site from "@/data/site.json";
import styles from "./cv.module.css";

export const metadata = {
    title: "CV",
};

const CV = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>CV</h1>

            <iframe
                src={site.cvFile}
                className={styles.pdfViewer}
                title={`${site.name} CV`}
            />

            <p className={styles.mobileFallback}>
                The embedded preview isn&apos;t available on small screens.
            </p>

            <div className={styles.actions}>
                <a
                    href={site.cvFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.openBtn}
                >
                    Open CV
                </a>
                <a href={site.cvFile} download className={styles.downloadBtn}>
                    Download CV
                </a>
            </div>
        </main>
    );
};

export default CV;
