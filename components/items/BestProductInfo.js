import styles from "./ProductInfo.module.css";

function BestProductInfo({ name, price, like, images}) {
  const imageUrl =
    images && images.length > 0 ? images : "/imgs/img_default.png";
  return (
    <div className={styles.productInfo}>
      <div className={styles.bestImg}>
        <img src={imageUrl} alt={name} className={styles.img}/>
      </div>
      <div>{name}</div>
      <div>{price}원</div>
      <div>♡ {like}</div>
    </div>
  );
}
export default BestProductInfo;
