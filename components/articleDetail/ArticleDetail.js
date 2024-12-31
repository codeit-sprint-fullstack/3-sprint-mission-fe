import styles from "./ArticleDetail.module.css";
import Image from "next/image";
import UpdateDropDown from "../UpdateDropDown";

export default function ArticleDetail({ article }) {
  return (
    <div className={styles.articleContentsBox}>
      <div className={styles.contentsGap}>
        <div className={styles.articleTitle}>
          {/* 게시물 제목 */}
          <div className={styles.bigText}>{article.title}</div>
          <UpdateDropDown />
        </div>
        <div className={styles.articleInfo}>
          <div className={styles.userInfo}>
            <div className={styles.userProfileImgBox}>
              <Image fill alt="userProfileImg" src="/imgs/userProfileImg.png" />
            </div>
            <div className={styles.nameAndDate}>
              <div>총명한 판다</div>
              <div>2024.04.12</div>
            </div>
          </div>
          <div className={styles.likeBtBox}>
            <div className={styles.verticalLine}></div>
            <button className={styles.likeBt}>
              <div className={styles.btContents}>
                <div className={styles.likeImgBox}>
                  <Image fill alt="heart" src="/imgs/ic_heart.png" />
                </div>
                <div className={styles.likeCount}>123</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* 게시물 내용 */}
      <div>{article.content}</div>
    </div>
  );
}
