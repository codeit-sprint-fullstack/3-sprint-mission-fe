import styles from "@/components/Product/ItemCard.module.css";
import Image from "next/image";

// 아이템 타입 정의
type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type BestItemCardProps = {
  item: Item;
};

export default function BestItemCard({ item }: BestItemCardProps) {
  return (
    <div className={styles.itemCard}>
      <Image
        src={item.image}
        width={282}
        height={282}
        alt="상품 이미지"
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
            alt="좋아요 아이콘"
          />
        </div>
      </div>
    </div>
  );
}
