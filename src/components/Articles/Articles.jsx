import React from "react";

import styles from "./Articles.module.css";

import articles from "../../data/articles.json";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
  return (
    <section className={styles.container} id="articles">
      <h2 className={styles.title}>Articles</h2>
      <div className={styles.articles}>
        {articles.map((article, id) => {
          return <ArticleCard key={id} article={article} />;
        })}
      </div>
    </section>
  );
};
