/** @format */

import styles from "./Projects.module.css";
import Screenville from "./Screenville.JPG";
import { BiCodeAlt } from "react-icons/bi";
import { GiSpiderWeb } from "react-icons/gi";
import Piggyclone from "./Piggyclone.JPG";
import Kicksville from "./Kicksville.JPG";
import Portfolio from "./Portfolio.JPG";

const Projects = () => {
  return (
    <div className={styles.ProjectContainer}>
      <div className={styles.ProjectBox}>
        <div className={styles.cardBox}>
          <div>
            <img
              src={Screenville}
              alt="screenville"
              className={styles.imgBox}
            />
          </div>
        </div>
        <div className={styles.textBox}>
          <h4 className={styles.textHeader}>SCREENVILLE</h4>

          <h4 className={styles.textBar}>
            A site for an overview of the latest movie reviews using an API.
          </h4>
          <div className={styles.tools}>
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>API</span>
          </div>
          <div className={styles.buttonBar}>
            <span className={styles.buttonLinkBar}>
              <a href="https://screenville.netlify.app">
                <button>
                  <GiSpiderWeb className={styles.iconStyle} />
                  Live
                </button>
              </a>
            </span>
            <span className={styles.buttonLinkBar}>
              <a href="https://https://github.com/ayothekingg/Screenville">
                <button>
                  <BiCodeAlt className={styles.iconStyle} />
                  Code
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.ProjectBox}>
        <div className={styles.cardBox}>
          <div>
            <img src={Piggyclone} alt="piggyclone" className={styles.imgBox} />
          </div>
        </div>
        <div className={styles.textBox}>
          <h4 className={styles.textHeader}>PIGGYVEST CLONE</h4>

          <h4 className={styles.textBar}>
            A pexel perfect clone website of one of my favorite fintech
            companies, Piggyvest.
          </h4>
          <div className={styles.tools}>
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
          </div>
          <div className={styles.buttonBar}>
            <span className={styles.buttonLinkBar}>
              <a href="https://piggyclone.netlify.app">
                <button>
                  <GiSpiderWeb className={styles.iconStyle} />
                  Live
                </button>
              </a>
            </span>
            <span className={styles.buttonLinkBar}>
              <a href="https://https://github.com/ayothekingg/Piggyvest-Clone">
                <button>
                  <BiCodeAlt className={styles.iconStyle} />
                  Code
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.ProjectBox}>
        <div className={styles.cardBox}>
          <div>
            <img src={Kicksville} alt="kicksville" className={styles.imgBox} />
          </div>
        </div>
        <div className={styles.textBox}>
          <h4 className={styles.textHeader}>KICKSVILLE</h4>

          <h4 className={styles.textBar}>
            Kicksville is a simple e-commerce site solely for the sales of
            shoes, hence the name "Kicks"ville
          </h4>
          <div className={styles.tools}>
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
          </div>
          <div className={styles.buttonBar}>
            <span className={styles.buttonLinkBar}>
              <a href="https://kicksville.netlify.app">
                <button>
                  <GiSpiderWeb className={styles.iconStyle} />
                  Live
                </button>
              </a>
            </span>
            <span className={styles.buttonLinkBar}>
              <a href="https://https://github.com/ayothekingg/Kicksville">
                <button>
                  <BiCodeAlt className={styles.iconStyle} />
                  Code
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.ProjectBox}>
        <div className={styles.cardBox}>
          <div>
            <img src={Portfolio} alt="portfolio" className={styles.imgBox} />
          </div>
        </div>
        <div className={styles.textBox}>
          <h4 className={styles.textHeader}>PERSONAL PORTFOLIO</h4>

          <h4 className={styles.textBar}>
            Here's a showcase of my portfolio page(the page you are on right
            now). Hope you're having a smooth experience so far!
          </h4>
          <div className={styles.tools}>
            <span>REACT</span>
            <span>CSS MODULES</span>
            <span>REACT ROUTER</span>
            <span>FRAMER MOTION</span>
          </div>
          <div className={styles.buttonBar}>
            <span className={styles.buttonLinkBar}>
              <a href="https://ayotheking.netlify.app">
                <button>
                  <GiSpiderWeb className={styles.iconStyle} />
                  Live
                </button>
              </a>
            </span>

            <span className={styles.buttonLinkBar}>
              <a href="https://https://github.com/ayothekingg/Kicksville">
                <button>
                  <BiCodeAlt className={styles.iconStyle} />
                  Code
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
