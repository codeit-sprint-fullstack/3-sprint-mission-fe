import styles from "./ItemImg.module.css";

export default function ItemImg({ images }) {
  return (
    <div className={styles.itemImg}>
      <img src={images} alt="itemImg" className={styles.img} />
    </div>
  );
}
