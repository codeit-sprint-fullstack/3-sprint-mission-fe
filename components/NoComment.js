import Image from "next/image";
import styles from "./NoComment.module.css";

export default function NoComment() {
  return (
    <div className={styles.noComment}>
      <div className={styles.imgBox}>
        <Image fill src="/imgs/img_reply_empty.png" />
      </div>
      <div className={styles.textCenter}>
        <span> 아직 댓글이 없어요,</span>
        <span> 지금 댓글을 달아보세요!</span>
      </div>
    </div>
  );
}
