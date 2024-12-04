import Image from "next/image";
import styles from "@/styles/components/ArticleDetail/Comments.module.css";


function Comments() {
  return (
    <div className={styles.commentsBox}>
      <div className={styles.commentsHeader}>
        <h2 className={styles.comments}>혹시 사용기간이 어떻게 되실까요?
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
          <div className={styles.date}>1시간 전</div>
        </div>
      </div>

    </div>
  )
}

export default Comments;