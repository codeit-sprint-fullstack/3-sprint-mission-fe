import Image from "next/image";
import styles from "@/styles/components/ArticleDetail/NoneComments.module.css";

function NoneComments() {
  return (
    <div className={styles.noneCommentsBox}>
      <div
        className={styles.noneCommentsImage}
        style={{
          position: "relative",
        }}
      >
        <Image
          src="/images/default/None_comments_Img.png"
          alt="댓글이 없을 때 나오는 이미지"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <p className={styles.noneCommentsText}>
        아직 댓글이 없어요,<br />
        지금 댓글을 달아보세요!
      </p>
    </div>
  )
}

export default NoneComments;