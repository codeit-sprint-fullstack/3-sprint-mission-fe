import styles from "./Article.module.css";
import Image from "next/image";

export default function Article({ article }) {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleContents}>
        <div className={styles.articleMain}>
          <div className={styles.articleTitle}>{article.title}</div>
          <div className={styles.articleImgBox}>
            <Image
              fill
              src="/imgs/imgExample.png"
              alt="imgExample"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className={styles.articleInfo}>
          <div className={styles.leftInfo}>
            <div className={styles.profileImgBox}>
              <Image
                fill
                src="/imgs/userProfileImg.png"
                alt="profileImg"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.name}>총명한 판다</div>
            <div className={styles.date}>2024.04.19</div>
          </div>
          <div className={styles.like}>♡ 9999+</div>
        </div>
      </div>
    </div>
  );
}
