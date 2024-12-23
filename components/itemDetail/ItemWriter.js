import styles from "./ItemWriter.module.css";
import Image from "next/image";
import formatDate from "@/lib/formatDate";

export default function ItemWriter({ ownerNickname, updatedAt }) {
  return (
    <div className={styles.user}>
      <div className={styles.profileImgBox}>
        <Image fill src="/imgs/userProfileImg.png" alt="profileImg" />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.username}>{ownerNickname}</div>
        <div className={styles.date}>{updatedAt}</div>
      </div>
    </div>
  );
}
