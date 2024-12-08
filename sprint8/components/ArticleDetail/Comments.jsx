import Image from "next/image";
import styles from "@/styles/components/ArticleDetail/Comments.module.css";
import formatDate from "@/lib/formatDate";


function Comments({comment}) {
  return (
    <div className={styles.commentsBox}>
      <div className={styles.commentsHeader}>
        <h2 className={styles.comments}>
          {comment.content}
        </h2>
        <div className={styles.togleMenuMark}>⋮</div>
      </div>
      <div className={styles.commentsMetaData}>
        <div
          className={styles.profileImage}
          style={{
            position: "relative",
          }}
        >
          <Image
            fill
            src="/images/icons/ic_profile_big.png"
            alt="프로필 이미지"
          />
        </div>
        <div className={styles.metaDataSmallBox}>
          <div className={styles.nickname}>똑똑한판다</div>
          <div className={styles.date}>{formatDate(comment.createdAt)}</div>
        </div>
      </div>

    </div>
  )
}

export default Comments;