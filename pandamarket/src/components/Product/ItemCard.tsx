import styles from "@/components/Product/ItemCard.module.css";
import Image from "next/image";

// Item 타입 정의
type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
  favoriteCount?: number;
};

// Props 타입 정의
type ItemCardProps = {
  item: Item;
};

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className={styles.itemCard}>
      <Image
        src="/images/img_default.png"
        width={220}
        height={220}
        alt="default Image"
        className={styles.itemCardThumbnail}
      />
      <div className={styles.itemSummary}>
        <h2 className={styles.itemName}>{item.name}</h2>
        <p className={styles.itemPrice}>{item.price.toLocaleString()}원</p>
        <div className={styles.favoriteCount}>
          <Image
            src="/images/ic_heart.png"
            width={16}
            height={16}
            alt="heart Icon"
          />
        </div>
      </div>
    </div>
  );
}
