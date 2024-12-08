import { useState, useEffect } from "react";
import { articleAPI } from "@/lib/axios";
import BestArticle from "./BestArticle";
import Link from "next/link";
import styles from "./BestArticleList.module.css";

function BestArticleList() {
  const [bestArticles, setBestArticles] = useState([]);

  const DISPLAY_LIMIT = 3;

  useEffect(() => {
    async function fetchBestArticles() {
      try {
        const response = await articleAPI.getArticles();
        const sortedArticles = [...response.data]
          .sort((a, b) => b.likes - a.likes)
          .slice(0, DISPLAY_LIMIT);
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
        <Link href={`/article/${article.id}`} key={article.id}>
          <BestArticle
            // key={article.id}
            article={article}
            className={styles.bestArticle}
          />
        </Link>
      ))}
    </div>
  );
}

export default BestArticleList;
