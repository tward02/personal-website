import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";
import classes from './bottomBar.module.css'

const BottomBar = () => {

    return (
        <footer className={classes.footer}>
            <p>© {new Date().getFullYear()} Tyler Ward. All Rights Reserved.</p>
            <div className={classes.socialLinks}>
                <a href="https://github.com/tward02" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/tward02" target="_blank"
                   rel="noopener noreferrer"><FaLinkedin/></a>
                <a href="mailto:tylerward1@btinternet.com"><FaEnvelope/></a>
            </div>
        </footer>
    )
}

export default BottomBar;
