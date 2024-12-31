import styles from "./ProductInfo.module.css";

function OnSaleProductInfo({ name, price, like, images }) {
  const imageUrl =
    !images ||
    images.length === 0 ||
    images[0].startsWith("https://example.com")
      ? "/imgs/img_default.png" // 기본 이미지
      : images[0];
  return (
    <div className={styles.productInfo}>
      <div className={styles.onSaleProductImg}>
        <img src={imageUrl} alt={name} className={styles.img} />
      </div>
      <div>{name}</div>
      <div>{price}원</div>
      <div>♡ {like}</div>
    </div>
  );
}
export default OnSaleProductInfo;
