import styles from "./BestArticle.module.css";
import Image from "next/image";
// import formatDate from "@/lib/formatDate";

function BestArticle({ title }) {
  return (
    <div className={styles.bestArticleLayout}>
      <div className={styles.bestArticleMain}>
        <div className={styles.bestBanner}>🏆 Best</div>
        <div className={styles.bestArticleContentsBox}>
          <div className={styles.bestArticleTitle}>{title}</div>
          <div className={styles.articleImgBox}>
            <Image
              fill
              src="/imgs/imgExample.png"
              alt="imgExample"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.bestArticleInfo}>
          <div className={styles.bestArticleUserInfo}>
            <div className={styles.nameText}>총명한 판다</div>
            <div className={styles.likeText}>♡ 9999+</div>
          </div>
          <div className={styles.dateText}>2024.04.06</div>
        </div>
      </div>
    </div>
  );
}

export default BestArticle;
