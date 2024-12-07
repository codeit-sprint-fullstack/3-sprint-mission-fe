import { useState, useEffect } from "react";
import { articleAPI } from "@/lib/axios";
import BestArticle from "./BestArticle";
import styles from "./BestArticleList.module.css";

function BestArticleList() {
  const [bestArticles, setBestArticles] = useState([]);

  useEffect(() => {
    async function fetchBestArticles() {
      try {
        const response = await articleAPI.getArticles();
        const sortedArticles = response.data
          .slice()
          .sort((a, b) => b.likes - a.likes)
          .slice(0, 3);
        setBestArticles(sortedArticles);
      } catch (error) {
        console.error("Error fetching best articles:", error);
      }
    }

    fetchBestArticles();
  }, []);

  return (
    <div className={styles.BestArticleList}>
      {bestArticles.map((article) => (
        <BestArticle
          key={article.id}
          article={article}
          className={styles.bestArticle}
        />
      ))}
    </div>
  );
}

export default BestArticleList;
