import Image from "next/image";
import styles from "./NoComment.module.css";

export default function NoComment({ isArticle }) {
  return (
    <div className={styles.noComment}>
      <div className={styles.imgBox}>
        <Image
          fill
          src={
            isArticle
              ? "/imgs/img_reply_empty.png"
              : "/imgs/img_inquiry_empty.png"
          }
          alt="emptyImg"
        />
      </div>
      <div className={styles.textCenter}>
        {isArticle ? (
          <>
            <span> 아직 댓글이 없어요,</span>
            <span> 지금 댓글을 달아보세요!</span>
          </>
        ) : (
          <span>아직 문의가 없어요</span>
        )}
      </div>
    </div>
  );
}
