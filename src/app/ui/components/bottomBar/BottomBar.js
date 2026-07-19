import site from "@/data/site.json";
import Icon from "@/app/ui/components/icons/Icons";
import classes from "./bottomBar.module.css";

const BottomBar = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.inner}>
                <p className={classes.copyright}>
                    © {new Date().getFullYear()} {site.name}
                </p>
                <div className={classes.socialLinks}>
                    {site.socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            aria-label={social.label}
                        >
                            <Icon name={social.icon}/>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default BottomBar;
