import Image from "next/image";
import classes from "./page.module.css";
import TopBar from "@/app/ui/components/topBar/TopBar";
import BottomBar from "@/app/ui/components/bottomBar/BottomBar";
import ProjectCard from "@/app/ui/components/projectCard/ProjectCard";

const Home = () => {
    return (
        <>
            <TopBar/>
            <main className={classes.mainContent}>
                <section className={classes.heroSection}>
                    <div className={classes.textContent}>
                        <h1 className={classes.title}>Tyler Ward</h1>
                        <p className={classes.bio}>
                            Passionate software engineer specializing in modern web development, Java and API driven applications.
                        </p>
                        {/*Further profile + description maybe add links to evboo, greenfrog etc*/}
                        <div className={classes.ctaButtons}>
                            <a href="/cv" className={classes.primaryBtn}>View My CV</a>
                            <a href="/contact" className={classes.secondaryBtn}>Get in Touch</a>
                        </div>
                    </div>
                    <div className={classes.imageWrapper}>
                        <Image
                            src="/images/profile.jpg"
                            alt="Tyler Ward profile picture"
                            width={250}
                            height={250}
                            className={classes.profilePic}
                            priority
                        />
                    </div>
                </section>

                <section id="projects" className={classes.projectsSection}>
                    <h2>Featured Projects</h2>
                    <div className={classes.projectGrid}>
                        <ProjectCard title={"Learn Access"}
                                     description={"An interactive eLeanring platform to teach developers how to implement accessible interfaces."}
                                     link={"https://github.com/tward02/learn-access"}/>
                        <ProjectCard title={"Move File…"}
                                     description={"A one page React App to view the latest news articles published around the world."}
                                     link={"https://github.com/tward02/news-feed-app"}/>
                        <ProjectCard title={"Game of Life Simulator"}
                                     description={"A Java application to simulate Conway's Game of Life."}
                                     link={"https://github.com/tward02/Game-of-Life"}/>
                    </div>
                </section>
            </main>
            <BottomBar/>
        </>
    );
}

export default Home;
