import { getFormattedDate } from "@/lib/dateUtils";
import styles from "./Article.module.css";

function Article({ article }) {
  const placeholderImage = `/product.png`;

  const handleImageError = (e) => {
    e.target.src = placeholderImage; // 이미지 로드 실패 시 대체 이미지 설정
  };

  const formattedDate = getFormattedDate(article.createdAt);

  return (
    <div className={styles.article}>
      <div className={styles.title}>{article.title}</div>
      <div className={styles.imgBack}>
        <img
          src={article.images || placeholderImage}
          alt="상품이미지"
          className={styles.productImg}
          onError={handleImageError}
        />
      </div>
      <div className={styles.user}>
        <img
          src="/user_profile.png"
          alt="user_profile"
          className={styles.userImg}
        />
        <div>총명한판다</div>
        <div>{formattedDate}</div>
      </div>
      <div className={styles.likeBox}>
        <img src="/ic_heart.png" alt="like" className={styles.likeImg} />
        <div>{article.likes}</div>
      </div>
    </div>
  );
}

export default Article;
