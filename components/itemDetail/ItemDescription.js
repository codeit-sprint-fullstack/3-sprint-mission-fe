import styles from "./ItemDescription.module.css";

export default function ItemDescription({ description, tags }) {
  return (
    <div className={styles.itemDescriptionBox}>
      {/* 상품 소개  */}
      <div className={styles.itemDescription}>
        <div className={`${styles.descriptionText} ${styles.middleWeight}`}>
          상품 소개
        </div>
        <div className={`${styles.descriptionText} ${styles.smallWeight}`}>
          {description}
          {/* .split(".")
            .filter((sentence) => sentence.trim() !== "") // 빈 문장 제거
            .map((sentence, index) => (
              <p key={index}>{sentence.trim()}.</p> // 문장을 p 태그로 감쌈
            ))} */}
        </div>
      </div>
      {/* 상품 태그  */}
      <div className={styles.itemTagBox}>
        <div className={`${styles.descriptionText} ${styles.middleWeight}`}>
          상품 태그
        </div>
        <div className={styles.itemTagList}>
          {!tags ? (
            <div className={styles.itemTag}> 로딩 중입니다 </div>
          ) : tags.length === 0 ? (
            <div className={styles.itemTag}> 태그가 없습니다 </div>
          ) : (
            tags.map((tag, index) => {
              <div key={index} className={styles.itemTag}>
                #{tag}
              </div>;
            })
          )}
        </div>
      </div>
    </div>
  );
}
