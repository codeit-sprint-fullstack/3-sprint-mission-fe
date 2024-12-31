import styles from "./ItemDetail.module.css";
import ItemImg from "./ItemImg";
import ItemTitle from "./ItemTitle";
import ItemDescription from "./ItemDescription";
import ItemWriter from "./ItemWriter";
import LikeButton from "../LikeButton";

export default function ItemDetail({ product }) {
  const {
    name,
    description,
    price,
    tags,
    images,
    ownerNickname,
    updatedAt,
    favoriteCount,
  } = product;

  const imageUrl =
  !images ||
  images.length === 0 ||
  images[0].startsWith("https://example.com")
    ? "/imgs/img_default.png" // 기본 이미지
    : images[0];
  console.log("images", images);
  return (
    <div className={styles.itemBox}>
      <div className={styles.item}>
        {/* 상품 사진 */}
        <ItemImg images={imageUrl} />
        {/* 상품 정보 + 글쓴이 정보*/}
        <div className={styles.aboutItem}>
          {/* 상품 정보 */}
          <div className={styles.itemInfo}>
            {/* 제목이랑 가격 */}
            <ItemTitle name={name} price={price} />
            {/* 상품 소개 + 태그*/}
            <ItemDescription description={description} tags={tags} />
          </div>
          {/* 글쓴이 정보 + 좋아요 */}
          <div className={styles.userBox}>
            {/* 글쓴이 정보 */}
            <ItemWriter ownerNickname={ownerNickname} updatedAt={updatedAt} />
            <div className={styles.likeBtBox}>
              {/* 수직선   */}
              <div className={styles.verticalLine} />
              {/* 좋아요 버튼 */}
              <LikeButton favoriteCount={favoriteCount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
