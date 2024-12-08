import styles from "./BestPost.module.css";
import { PostBoxImg } from "./BestPost";
import Link from "next/link";

export function LikeNum({ width, fontSize, margin, value }) {
  return (
    <div className={styles.like_num}>
      <div className={styles.like_num_img}>
        <img
          src="../../img/ic_heart.png"
          style={{
            width: width,
            height: "auto",
          }} // width 동적으로 설정
        />
        <span style={{ fontSize: fontSize, marginLeft: margin }}>{value}</span>
      </div>
    </div>
  );
}

export function PostBox({ title, userid, createdAt, like, boardid }) {
  function Date_(value) {
    const newDate = new Date(value);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return `${year}.${month}.${day}`;
  }

  return (
    <Link href={`/freeboard/${boardid}`} className={styles.postbox}>
      <div className={styles.content_text}>
        <p className={styles.width_none}>{title}</p>
        <PostBoxImg />
      </div>
      <div className={styles.text_bottom}>
        <div className={styles.text_left}>
          <div className={styles.nickname_box}>
            <div className={styles.img_background}>
              <img src="../../img/profle.png" />
            </div>
            <span>{userid === null ? "총명한 판다" : userid}</span>
          </div>
          <span>{Date_(createdAt)}</span>
        </div>
        <LikeNum width={20} fontSize={16} margin={8} value={like} />
      </div>
    </Link>
  );
}
