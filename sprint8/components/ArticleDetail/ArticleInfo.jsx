import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/ArticleDetail/ArticleInfo.module.css";
import formatDate from '@/lib/formatDate';
import EditDeletMenu from "@/components/ArticleDetail/EditDeletMenu";

function ArticleInfo({ article }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [articleEditDelete, setArticleEditDelete] = useState(false);

  return (
    <div className={styles.articleInfoBox}>
      <div className={styles.articleInfoHeader}>
        <h1 className={styles.articleInfoTitle}>{article.title}</h1>
        <div
          onClick={() => {
            setToggleMenu(!toggleMenu)
            setArticleEditDelete(!articleEditDelete)
          }}
          className={styles.togleMenuMark}
        >⋮</div>
        {toggleMenu ? <EditDeletMenu articleId={article.id} article={articleEditDelete} setArticleEditDelete={setArticleEditDelete} /> : null}
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
          <div className={styles.date}>
            {formatDate(article.createdAt)}
          </div>
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
            <div className={styles.likeNum}>{article.likes}</div>
          </div>
        </div>
      </div>
      <div className={styles.articleInfoContentBox}>
        <h2 className={styles.articleInfoContentText}>
          {article.content}
        </h2>
      </div>
    </div>
  );
}

export default ArticleInfo;
