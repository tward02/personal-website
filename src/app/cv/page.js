import Link from "next/link";
import styles from "./cv.module.css";
import TopBar from "@/app/ui/components/topBar/TopBar";
import BottomBar from "@/app/ui/components/bottomBar/BottomBar";

const CV = () => {
    return (
        <div className={styles.pageWrapper}>
            <TopBar/>

            <main className={styles.container}>
                <h1 className={styles.title}>My CV</h1>

                <iframe
                    src="/CV.pdf"
                    className={styles.pdfViewer}
                    title="CV"
                />

                <Link href="/CV.pdf" target="_blank" download>
                    <button className={styles.downloadBtn}>
                        Download CV
                    </button>
                </Link>
            </main>

            <BottomBar/>
        </div>
    );
};

export default CV;
