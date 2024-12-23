import styles from "./CommentLayout.module.css";
import Image from "next/image";
import UpdateDropDown from "../UpdateDropDown";
import formatUpdatedTime from "@/lib/formatDate";

export default function Comment({ comment }) {
  const username = comment.writer.nickname;
  const updatedAt = comment.updatedAt;

  const updatedTime = formatUpdatedTime(updatedAt); // 하루 지나면 날짜 안지나면 ?시간 전 리턴

  return (
    <div className={styles.commentBox}>
      <div className={styles.contents}>
        <div className={styles.commentContent}>{comment.content}</div>
        <div className={styles.userInfo}>
          <div className={styles.userProfileImgBox}>
            <Image fill alt="userProfileImg" src="/imgs/userProfileImg.png" />
          </div>
          <div className={styles.nameAndDate}>
            <div>{username}</div>
            <div>{updatedTime}</div>
          </div>
        </div>
      </div>
      <UpdateDropDown />
    </div>
  );
}
