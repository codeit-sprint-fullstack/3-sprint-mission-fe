import styles from "@/components/BestPost.module.css";
import BoxImg from "next/image";
import Medal from "next/image";
import { LikeNum } from "./PostBox";

export const PostBoxImg = function () {
  return (
    <div className={styles.post_box_img}>
      <BoxImg
        src="/img/macbook.png"
        alt="macbook Image"
        // width={48}
        // height={40}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
      />
    </div>
  );
};

export const BestPost = function ({ title, userid, createdAt, like }) {
  function Date_(value) {
    const newDate = new Date(value);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return `${year}.${month}.${day}`;
  }
  return (
    <div className={styles.post_box}>
      <div className={styles.best_box}>
        <div className={styles.medal_box}>
          {/* <img src="../../img/medal.png" /> */}
          <Medal
            src="/img/medal.png"
            alt="medal Image"
            // width={16}
            // height={16}
            fill
          />
        </div>
        <span>Best</span>
      </div>
      <div className={styles.content_text}>
        <p>{title}</p>
        <div className={styles.post_box_img}>
          <BoxImg
            src="/img/macbook.png"
            alt="macbook Image"
            // width={48}
            // height={40}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className={styles.text_bottom}>
        <div className={styles.text_left}>
          <span>{userid === null ? "총명한 판다" : userid}</span>
          <LikeNum width={13} fontSize={14} margin={4} value={like} />
        </div>
        <span>{Date_(createdAt)}</span>
      </div>
    </div>
  );
};
