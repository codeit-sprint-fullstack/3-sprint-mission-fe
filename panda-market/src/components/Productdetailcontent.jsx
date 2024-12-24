import React from 'react';
import styles from '../styles/ProductDetail.module.css';

const ProductDetailContent = ({ product, onDelete }) => {
  const handleFavorite = async () => {
    try {
      const res = await fetch(`https://panda-market-api.vercel.app/products/${product?.id}/favorite`, {
        method: product?.isFavorited ? 'DELETE' : 'POST',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (!res.ok) {
        throw new Error('좋아요 상태 변경 실패');
      }
      alert('좋아요 상태가 변경되었습니다.');
      // 상태 업데이트 필요
    } catch (error) {
      console.error('Error toggling favorite:', error);
      alert('좋아요 상태를 변경하는 중 오류가 발생했습니다.');
    }
  };

  if (!product) {
    return <div>상품 데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div className={styles.productContent}>
      <img
        src={product.image ? product.image : '/default.png'}
        alt={product.title || '상품이미지'}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h2>{product.title}</h2>
        <p className={styles.price}>{product.price}원</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.actions}>
          <button onClick={handleFavorite}>
            {product.isFavorited ? '좋아요 취소' : '좋아요'}
          </button>
          <button onClick={() => alert('수정 기능은 구현 중입니다.')}>수정</button>
          <button onClick={onDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContent;
