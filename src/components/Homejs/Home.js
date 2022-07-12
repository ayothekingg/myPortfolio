/** @format */
import styles from "./Home.module.css";
import displayPicture from "./displayPicture.jpeg";
import Button from "../Buttons/Button";
import { motion } from "framer-motion";

const container = {
  visible: { x: 0, transition: { duration: 1 } },
  hidden: { x: "-100vw" },
};

const Home = () => {
  return (
    <section>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className={styles.flexContainer}
      >
        <div className={styles.imgContainer}>
          <img
            src={displayPicture}
            alt="display"
            className={styles.displayPicture}
          />
        </div>
        <div>
          <h3 className={styles.job}>Frontend Engineer</h3>
          <h2>Hi, I'm Ayomide</h2>
          <h3 className={styles.textContainer}>
            I am a Frontend Engineer, i use web technologies to implement visual
            designs and creating user-friendly and cross-platform webpages and
            applications. I bring your ideas to life using modern web tools. You
            talk ideas, i talk {""}
            <span className={styles.cL}>codes</span> and {""}
            <span className={styles.cL}>logic</span>.
          </h3>
          <Button />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
