import { useState, useEffect } from "react";
import { articleAPI } from "@/lib/axios";
import Article from "./Article";
import Link from "next/link";
import styles from "./ArticleList.module.css";

function ArticleList({ orderBy = "recent", keyword }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const DISPLAY_LIMIT = 4;

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await articleAPI.getArticles();
        let articlesData = response.data;

        // 키워드 필터링
        if (keyword) {
          articlesData = articlesData.filter((article) =>
            article.title.toLowerCase().includes(keyword.toLowerCase())
          );
        }

        // 정렬
        if (orderBy === "recent") {
          articlesData = articlesData.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        } else if (orderBy === "likes") {
          articlesData = articlesData.sort((a, b) => b.likes - a.likes);
        }

        setArticles(articlesData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [keyword, orderBy]); // keyword와 orderBy 변경 시 재실행

  if (loading) {
    return <div className={styles.noResult}>로딩중...</div>;
  }

  if (articles.length === 0) {
    return <div className={styles.noResult}>검색 결과가 없습니다.</div>;
  }

  return (
    <div className={styles.articleList}>
      {articles.slice(0, DISPLAY_LIMIT).map((article) => (
        <Link href={`/article/${article.id}`} key={article.id}>
          <Article
            // key={article.id}
            article={article}
          />
        </Link>
      ))}
    </div>
  );
}

export default ArticleList;
