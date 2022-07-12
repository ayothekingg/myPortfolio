/** @format */

import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
import Socials from "../Socials/Socials";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.header}>
          <h4>
            ayo<span className={styles.mide}>mide</span>
          </h4>
        </div>
      </Link>

      {isExpanded ? (
        <IoIosMenu
          className={styles.iconStyle}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        />
      ) : (
        <VscClose
          className={styles.iconStyle}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        />
      )}

      <div className={isExpanded ? styles.navLinks : styles.navLinksExpanded}>
        <ul>
          {isExpanded ? (
            ""
          ) : (
            <li>
              <Link
                to="/"
                onClick={() => {
                  setIsExpanded(true);
                }}
              >
                Home
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/skills"
              onClick={() => {
                setIsExpanded(true);
              }}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => {
                setIsExpanded(true);
              }}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/articles"
              onClick={() => {
                setIsExpanded(true);
              }}
            >
              Articles
            </Link>
          </li>
        </ul>

        {isExpanded ? (
          ""
        ) : (
          <Socials
            className={isExpanded ? styles.navLinks : styles.navLinksExpanded}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
