/** @format */
import styles from "./Button.module.css";
import cv from "./cv.docx";
const Button = () => {
  return (
    <div>
      <a href={cv} target="_blank" rel="noreferrer">
        <button className={styles.downloadBtn}>Download CV</button>
      </a>
      <a href="mailto:ayojames444@gmail.com" target="_blank" rel="noreferrer">
        <button className={styles.contactBtn}>Contact</button>
      </a>
    </div>
  );
};

export default Button;
