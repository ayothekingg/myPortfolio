/** @format */
import styles from "./Home.module.css";
import displayPicture from "./displayPicture.jpeg";
import Button from "../Buttons/Button";
import { motion } from "framer-motion";

const container = {
  visible: { x: 0, transition: { delay: 0.5 } },
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
        <div>
          <img
            src={displayPicture}
            alt="display-picture"
            className={styles.displayPicture}
          />
        </div>
        <div>
          <p className={styles.job}>Frontend Developer</p>
          <h2>Hi, I'm Ayomide</h2>
          <h4 className={styles.textContainer}>
            I am a Frontend developer, i use web technologies to implement
            visual designs and creating user-friendly and cross-platform
            webpages and applications. I bring your ideas to life using modern
            web tools. You talk ideas, i talk {""}
            <span className={styles.cL}>codes</span> and {""}
            <span className={styles.cL}>logic</span>.
          </h4>
          <Button />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
