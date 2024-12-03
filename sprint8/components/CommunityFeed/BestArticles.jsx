import Image from "next/image";
import styles from "@/styles/components/CommunityFeed/BestArticles.module.css";

function BestArticles() {
  return (
    <div className={styles.bestArticlesBody}>
      <div className={styles.bestArticle}>
        <Image
          src="/images/logo/best_article_logo.png"
          alt="베스트 게시글 메달 이미지"
          width={102}
          height={30}
        />
        <div className={styles.articleContent}>
          <h2 className={styles.articleTitle}></h2>
          <Image
            src="/images/default/FE_default_Img.png"
            alt="베스트 게시글 이미지"
            width={72}
            height={72}
          />
        </div>
        <div className={styles.articleInfoBox}>
          <div className={styles.articleInfoLeft}>
            <span className={styles.nickname}>총명한판다</span>\
            <Image
              src="/images/icons/heart.png"
              alt="하트 이미지"
              width={16}
              height={16}
            />
            <div className={styles.articleLikeNum}>9999+</div>
          </div>
          <div className={styles.articleCreateDate}>2024. 12. 16</div>
        </div>
      </div>
    </div>
  )
}

export default BestArticles;