import Image from "next/image";
import styles from "@/styles/components/ArticleDetail/ArticleInfo.module.css";

function ArticleInfo() {
  return (
    <div className={styles.articleInfoBox}>
      <div className={styles.articleInfoHeader}>
        <h1 className={styles.articleInfoTitle}>맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?</h1>
        <div className={styles.togleMenuMark}>⋮</div>
      </div>
      <div className={styles.articleMetaDataBox}>
        <div className={styles.metaDataBoxLeft}>
          <div
            className={styles.profileImage}
            style={{
              position: "relative",
            }}
          >
            <Image
              fill
              src="/images/icons/ic_profile_big.png"
              alt="프로필 이미지"
            />
          </div>
          <div className={styles.nickname}>총명한판다</div>
          <div className={styles.date}>2024. 12. 16</div>
        </div>
        <div className={styles.MetaDataBoxRight}>
          <div className={styles.likeButtonBox}>
            <div
              className={styles.heartImage}
              style={{
                position: "relative",
              }}
            >
              <Image
                fill
                src="/images/icons/heart.png"
                alt="하트 이미지"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
            <p className={styles.redHeartImage}>
              &#x2764;&#xFE0F;
            </p>
            <div className={styles.likeNum}>123</div>
          </div>
        </div>
      </div>
      <div className={styles.articleInfoContentBox}>
        <h2 className={styles.articleInfoContentText}>
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </h2>
      </div>
    </div>
  );
}

export default ArticleInfo;
