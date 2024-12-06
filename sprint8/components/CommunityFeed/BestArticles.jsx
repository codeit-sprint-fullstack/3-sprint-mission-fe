import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/CommunityFeed/BestArticles.module.css";
import { getArticles } from "@/lib/pandaMarketApiService";
import formatDate from "@/lib/formatDate";

function BestArticles() {
  const [bestArticles, setBestArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const bestArticlesList = await getArticles(0, 3, 'best');
        setBestArticles(bestArticlesList);
      } catch (error) {
        console.error("Error fetching best articles:", error);
      }
    }; fetchArticles();
  }, []);

  const BestArticles = bestArticles.article || [];

  return (
    <div className={styles.bestArticlesBody}>
      {BestArticles.map((article, index) => (
        <Link
          key={index || article.id}
          href={`/ArticleDetail/${article.id}`}
          passHref
        >
          <div className={styles.bestArticle}>
            <div className={styles.bestMark}>
              <Image
                src="/images/icons/ic_medal.png"
                alt="베스트 게시글 메달 이미지"
                width={16}
                height={16}
              />
              <span className={styles.bestMarkText}>Best</span>
            </div>
            <div className={styles.bestArticleContent}>
              <h2 className={styles.bestArticleTitle}>{article.title}</h2>
              <Image
                src="/images/default/FE_default_Img.png"
                alt="베스트 게시글 이미지"
                width={72}
                height={72}
              />
            </div>
            <div className={styles.articleInfoBox}>
              <div className={styles.articleInfoLeft}>
                <span className={styles.nickname}>총명한판다</span>
                <div
                  className={styles.heartImage}
                  style={{
                    position: "relative",
                  }}
                >
                  <Image
                    fill
                    src="/images/icons/heart.png"
                    alt="하트 이미지"
                  />
                </div>
                <div className={styles.articleLikeNum}>{article.likes}</div>
              </div>
              <div className={styles.articleCreateDate}>{formatDate(article.createdAt)}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BestArticles;
