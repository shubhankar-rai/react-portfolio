import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shubhankarrai99@email.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/shubhankar-rai-428215127/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/shubhankar-rai" target="_blank">
            Github
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/mediumicon.svg")}
            alt="Medium icon"
            className={styles.medium}
          />
          <a href="https://www.medium.com/@shubhankarrai99" target="_blank">
            Medium
          </a>
        </li>
      </ul>
    </footer>
  );
};
