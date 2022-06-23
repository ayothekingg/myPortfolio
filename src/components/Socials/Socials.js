/** @format */
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div>
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
    </div>
  );
};

export default Socials;
