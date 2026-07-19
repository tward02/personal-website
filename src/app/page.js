import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
import ProjectCard from "@/app/ui/components/projectCard/ProjectCard";
import classes from "./page.module.css";

const Home = () => {
    return (
        <main>
            <section className={classes.hero}>
                <div className={classes.heroText}>
                    <p className={classes.kicker}>{site.role}</p>
                    <h1 className={classes.title}>{site.name}</h1>
                    <p className={classes.bio}>{site.bio}</p>
                    <div className={classes.ctaButtons}>
                        <Link href="/cv" className={classes.primaryBtn}>View my CV</Link>
                        <Link href="/contact" className={classes.secondaryBtn}>Get in touch</Link>
                    </div>
                </div>
                {site.profileImage && (
                    <Image
                        src={site.profileImage}
                        alt={`${site.name} profile picture`}
                        width={240}
                        height={240}
                        className={classes.profilePic}
                        priority
                    />
                )}
            </section>

            <section id="projects" className={classes.projects}>
                <h2 className={classes.sectionHeading}>Projects</h2>
                <div className={classes.projectGrid}>
                    {site.projects.map((project) => (
                        <ProjectCard key={project.title} {...project}/>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;
