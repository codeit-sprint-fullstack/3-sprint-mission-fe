import styles from "@/styles/components/shared/LikeButton.module.css";
import Image from "next/image";

function LikeButton({data = 20}) {
  return (
    <button className={styles.likeButtonBox}>
    <div
      className={styles.heartImage}
      style={{
        position: "relative",
      }}
    >
      <Image
        fill
        src="/images/icons/heart.png"
        alt="하트 이미지"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
    <p className={styles.redHeartImage}>
      &#x2764;&#xFE0F;
    </p>
    <div className={styles.likeNum}>{data}</div>
  </button>
  );
}

export default LikeButton;