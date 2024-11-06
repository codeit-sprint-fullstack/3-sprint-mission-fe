import React from 'react';
import styles from './ProductCard.module.css';
// import placeholderImage from '../../assets/images/placeholder.png';

// const placeholderImage = 'https://picsum.photos/id/8/343';
const placeholderIds = [0, 2, 6, 8, 9, 20, 26, 30, 36, 39, 48, 60, 145, 157, 160, 180, 201, 225, 250, 312, 366, 370];


const ProductCard = ({ product, size }) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(product.price);

  const randomId = placeholderIds[Math.floor(Math.random() * placeholderIds.length)];
  const placeholderImage = `https://picsum.photos/id/${randomId}/343`;

  const handleImageError = (e) => {
    e.target.src = placeholderImage; // 이미지 로드 실패 시 대체 이미지 설정
  };

  return (
    <div className={`${styles.card} ${styles[size]}`}>
      <img src={product.images || placeholderImage} alt={product.name} className={styles.image} onError={handleImageError} />
      <div className={styles.details}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{formattedPrice}원</p>
        <div className={styles.likes}>
          <img src='/static/images/like-icon.png' alt="like" className={styles.likeIcon} />
          <span>{product.favoriteCount}</span>
        </div>
      </div>
    </div >
  );
};

export default ProductCard;