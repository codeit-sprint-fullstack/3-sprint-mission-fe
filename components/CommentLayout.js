import styles from "./CommentLayout.module.css";
import Image from "next/image";
import UpdateDropDown from "./UpdateDropDown";

export default function Comment({ comment }) {
  return (
    <div className={styles.commentBox}>
      <div className={styles.contents}>
        <div className={styles.commentContent}>{comment.content}</div>
        <div className={styles.userInfo}>
          <div className={styles.userProfileImgBox}>
            <Image fill alt="userProfileImg" src="/imgs/userProfileImg.png" />
          </div>
          <div className={styles.nameAndDate}>
            <div>똑똑한 판다</div>
            <div>1시간 전</div>
          </div>
        </div>
      </div>
      <UpdateDropDown />
    </div>
  );
}
