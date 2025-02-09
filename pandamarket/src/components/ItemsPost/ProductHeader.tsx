import styles from "@/components/ItemsPost/ProductHeader.module.css";

export default function ProductHeader() {
  return (
    <div className={styles.postWrapper}>
      <h1 className={styles.productPost}>상품 등록하기</h1>
      <button type="submit" className={styles.postButton}>
        등록
      </button>
    </div>
  );
}