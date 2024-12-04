import styles from "@/components/postCommentList.module.css"
import Image from "next/image"

export default function CommentList({comments}){
  return(
    <div className={styles.commentListWrapper}>
      <div className={styles.commentWrapper}>
        {comments.map((comment) => {
          <li key={comment.id}>
            <div className={styles.commentContent}>{comments.content}</div>
          </li>
        })}
        <Image
        src="/images/ic_kebab.png"
        width={24}
        height={24}
        alt="더보기"
        />
      </div>
      <div className={styles.aboutWrapper}>
        <Image
        src="/images/userImg.png"
        width={32}
        height={32}
        alt="User image"
        className={styles.userImage}
        />
        <div>
          <span className={styles.userName}>똑똑한판다</span>
          <span className={styles.hour}>1시간 전</span>
        </div>
      </div>
    </div>
  )
}