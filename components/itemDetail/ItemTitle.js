import UpdateDropDown from "../UpdateDropDown";
import styles from "./ItemTitle.module.css";

export default function ItemTitle({ name, price }) {
  return (
    <div className={styles.itemMainInfoBox}>
      <div className={styles.itemMainInfo}>
        <div className={styles.itemTitle}>{name}</div>
        <div className={styles.itemPrice}>{price}원</div>
      </div>
      <UpdateDropDown />
    </div>
  );
}
