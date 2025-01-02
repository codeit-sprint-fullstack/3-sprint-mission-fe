import { useState, useEffect } from "react";
import { articleAPI } from "@/lib/axios";
import BestArticle from "./BestArticle";
import Link from "next/link";
import styles from "./BestArticleList.module.css";

function BestArticleList() {
  const [bestArticles, setBestArticles] = useState([]);

  useEffect(() => {
    async function fetchBestArticles() {
      try {
        const response = await articleAPI.getArticles({
          page: 1, // 첫 페이지 가져오기
          pageSize: 3, // 한 페이지에 n개의 게시글
          orderBy: "like", // recent: 최신순, like: 인기순
        });
        setBestArticles(response.data.list); // 백엔드에서 가져온 데이터를 그대로 사용
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
