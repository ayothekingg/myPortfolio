/** @format */
import styles from "./Button.module.css";

const Button = () => {
  return (
    <div>
      <button className={styles.downloadBtn}>Download CV</button>
      <button className={styles.contactBtn}>Contact</button>
    </div>
  );
};

export default Button;
