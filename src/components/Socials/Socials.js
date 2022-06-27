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
    transition: { type: "tween", delay: 1 },
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
          <a href="https://github.com/ayothekingg" target="_blank">
            <AiFillGithub className={styles.fontSize} />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/_ayotheking" target="_blank">
            <FaTwitter className={styles.fontSize} />
          </a>
        </li>

        <li>
          <a href="mailto:ayojames444@gmail.com" target="_blank">
            <MdOutlineAlternateEmail className={styles.fontSize} />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/james-amoo-3a655b1bb/"
            target="_blank"
          >
            <BsLinkedin className={styles.fontSize} />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Socials;
