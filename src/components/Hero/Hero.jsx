import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shubhankar</h1>
        <p className={styles.description}>
          I'm a full-stack developer with more than 2 years of experience using
          Angular, Spring Boot, React & NodeJS. Reach out if you'd like to learn
          more!
        </p>
        <a
          href="mailto:shubhankarrai99@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/myimg.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
