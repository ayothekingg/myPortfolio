/** @format */
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";
import styles from "./Socials.module.css";

const socials = {
  visible: {
    y: 0,
    transition: { type: "tween", duration: 1.5 },
  },
  hidden: {
    y: "100vh",
  },
};

const Socials = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={socials}>
      <ul className={styles.socialStyle}>
        <li>
          <a
            href="https://github.com/ayothekingg"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Github"
          >
            <AiFillGithub className={styles.fontSize} />
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Twitter"
          >
            <FaTwitter className={styles.fontSize} />
          </a>
        </li>

        <li>
          <a
            href="mailto:ayojames444@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Email"
          >
            <MdOutlineAlternateEmail className={styles.fontSize} />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/james-amoo-3a655b1bb/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to LinkedIn"
          >
            <BsLinkedin className={styles.fontSize} />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Socials;
