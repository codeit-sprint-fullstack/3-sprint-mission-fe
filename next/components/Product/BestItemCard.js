import styles from "@/components/Product/ItemCard.module.css"
import Image from "next/image";

export default function BestItemCard({ item }) {
  return (
    <div className={styles.itemCard}>
      <Image
        src="/images/img_default.png"
        width={282} height={282}
        alt="default Image"
        className={styles.itemCardThumbnail}
      />
      <div className={styles.itemSummary}>
        <h2 className={styles.itemName}>{item.name}</h2>
        <P className={styles.itemPrice}>{item.price.toLcaleString()}원</P>
        <div className={styles.favoriteCount}>
          <Image
            src="/images/ic_heart.png"
            width={16} height={16}
            alt="heart Icon"
          />
        </div>
      </div>
    </div>
  )
}