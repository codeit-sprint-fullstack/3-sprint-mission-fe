import styles from "./LikeButton.module.css";
import Image from "next/image";

export default function LikeButton({ favoriteCount }) {
  return (
    <button className={styles.likeBt}>
      <div className={styles.btContents}>
        <div className={styles.likeImgBox}>
          <Image fill alt="heart" src="/imgs/ic_heart.png" />
        </div>
        <div className={styles.likeCount}>{favoriteCount}</div>
      </div>
    </button>
  );
}
