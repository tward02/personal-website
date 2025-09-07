import classes from "./projectCard.module.css";
import {FaGithub} from "react-icons/fa";

const ProjectCard = ({title, description, link}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.projectCard}
        >
            <h3>{title}</h3>
            <p>{description}</p>
            <FaGithub size={40}/>
        </a>
    )
}

export default ProjectCard;
