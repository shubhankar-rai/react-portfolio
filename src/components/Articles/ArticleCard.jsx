import React from "react";

import styles from "./ArticleCard.module.css";

export const ArticleCard = ({
  article: { title, description, topics, source },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.topics}>
        {topics.map((topic, id) => {
          return (
            <li key={id} className={styles.topic}>
              {topic}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link} target="_blank">
          Read Here
        </a>
      </div>
    </div>
  );
};
