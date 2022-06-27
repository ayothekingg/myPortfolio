/** @format */
import styles from "./Skills.module.css";
import Button from "../Buttons/Button";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiGitPullRequest } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const fontSize = {
    fontSize: "1.5rem",
  };

  const textAnimate = {
    visible: { x: 0, transition: { duration: 1 } },
    hidden: { x: "-100vw" },
  };

  const skillAnimate = {
    visible: { x: 0, transition: { duration: 1 } },
    hidden: { x: "100vw" },
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.textContainer}
        initial="hidden"
        animate="visible"
        variants={textAnimate}
      >
        <h4 className={styles.header}>Get to know me more !</h4>
        <h4 className={styles.textBar}>
          Hi again ! I know I already said hi before, but this time is more
          personal, get to know me more ! So yeah, I'm a student of Computer
          Science, I've got a knowledge of data structures & algorithm, system
          analysis, and quite a good knowledge of mathematics (no way to avoid
          this while studying computer science). When I'm not coding, I watch
          movies/tv shows or football. I take pleasure in giving my 100%
          dedication to the job and offering maximum satisfaction to prospective
          clients using the best tools. I'm currently available for junior
          developer roles and freelancing jobs ! Come have a share of this
          greatness !
        </h4>
        <div style={{ justifyContent: "center" }}>
          <Button />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={skillAnimate}
        className={styles.skillContainer}
      >
        <div className={styles.headerBar}>
          <h4 className={styles.header}>Core technologies</h4>
        </div>
        <div className={styles.skillBar}>
          <div className={styles.skillBox}>
            <AiFillHtml5 style={fontSize} />
            <h6>HTML</h6>
          </div>

          <div className={styles.skillBox}>
            <FaCss3Alt style={fontSize} />
            <h6>CSS</h6>
          </div>

          <div className={styles.skillBox}>
            <SiJavascript style={fontSize} />
            <h6>Javascript</h6>
          </div>

          <div className={styles.skillBox}>
            <SiTypescript style={fontSize} />
            <h6>Typescript</h6>
          </div>

          <div className={styles.skillBox}>
            <SiTailwindcss style={fontSize} />
            <h6>Tailwind CSS</h6>
          </div>

          <div className={styles.skillBox}>
            <FaReact style={fontSize} />
            <h6>React.js</h6>
          </div>

          <div className={styles.skillBox}>
            <BiGitPullRequest style={fontSize} />
            <h6>Git/Github</h6>
          </div>

          <div className={styles.skillBox}>
            <GrGraphQl style={fontSize} />
            <h6>GraphQL</h6>
          </div>

          <div className={styles.skillBox}>
            <SiRedux style={fontSize} />
            <h6>Redux</h6>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
