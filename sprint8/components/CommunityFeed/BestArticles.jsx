import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/CommunityFeed/BestArticles.module.css";

function BestArticles() {
  return (
    <div className={styles.bestArticlesBody}>
      <Link
        href="/ArticleDetail/1"
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
            <h2 className={styles.bestArticleTitle}>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</h2>
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
              <Image
                src="/images/icons/heart.png"
                alt="하트 이미지"
                width={12.75}
                height={12}
              />
              <div className={styles.articleLikeNum}>9999+</div>
            </div>
            <div className={styles.articleCreateDate}>2024. 12. 16</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BestArticles;