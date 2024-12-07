import styles from "./BestArticle.module.css";

function BestArticle({ article }) {
  const placeholderImage = `/product.png`;

  const handleImageError = (e) => {
    e.target.src = placeholderImage; // 이미지 로드 실패 시 대체 이미지 설정
  };

  return (
    <div className={styles.article}>
      <div className={styles.label}>Best</div>
      <div className={styles.title}>{article.title}</div>
      <div className={styles.imgBack}>
        <img
          src={article.images || placeholderImage}
          alt="상품이미지"
          className={styles.productImg}
          onError={handleImageError}
        />
      </div>
      <div className={styles.infoBar}>
        <div>총명한판다</div>
        <div className={styles.likeBox}>
          <img src="/ic_heart.png" alt="like" className={styles.likeImg} />
          <div>{article.likes}</div>
        </div>
        <div className={styles.date}>2024.04.16</div>
      </div>
    </div>
  );
}

export default BestArticle;
