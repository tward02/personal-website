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

            <a href={site.cvFile} download className={styles.downloadBtn}>
                Download CV
            </a>
        </main>
    );
};

export default CV;
