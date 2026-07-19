import classes from "./projectCard.module.css";

const ProjectCard = ({title, description, link, tags = []}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.projectCard}
        >
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.description}>{description}</p>
            <div className={classes.meta}>
                {tags.map((tag) => (
                    <span key={tag} className={classes.tag}>{tag}</span>
                ))}
                <span className={classes.viewLink}>View source →</span>
            </div>
        </a>
    );
};

export default ProjectCard;
