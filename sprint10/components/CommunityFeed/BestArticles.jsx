import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/CommunityFeed/BestArticles.module.css";
import formatDate from "@/lib/formatDate";
import useArticle from "@/hooks/useArticle";

function BestArticles() {
  
  const bestArticlesList = useArticle(3, 'best');
  const BsetArticles = bestArticlesList.article || [];

  if (!bestArticlesList) return null;

  return (
    <div className={styles.bestArticlesBody}>
      {BsetArticles.map((article, index) => (
        <Link
          key={index || article.id}
          href={`/article-detail/${article.id}`}
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
