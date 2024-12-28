import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/components/ArticleDetail/ArticleInfo.module.css";
import formatDate from '@/lib/formatDate';
import EditDeletMenu from "@/components/ArticleDetail/EditDeletMenu";
import LikeButton from "@/components/shared/LikeButton";

function ArticleInfo({ article }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.articleInfoBox}>
      <div className={styles.articleInfoHeader}>
        <h1 className={styles.articleInfoTitle}>{article.title}</h1>
        <div
          onClick={() => {
            setToggleMenu(!toggleMenu)
          }}
          className={styles.togleMenuMark}
        >⋮</div>
        {toggleMenu ?
          <EditDeletMenu
            id={article.id}
            setItemEditDelete={setArticleEditDelete} /> :
            null}
      </div>
      <div className={styles.articleMetaDataBox}>
        <div className={styles.metaDataBoxLeft}>
          <div
            className={styles.profileImage}
            style={{
              position: "relative"
            }}
          >
            <Image
              fill
              src="/images/icons/ic_profile_big.png"
              alt="프로필 이미지"
              objectFit="cover"
            />
          </div>
          <div className={styles.nickname}>총명한판다</div>
          <div className={styles.date}>
            {formatDate(article.createdAt)}
          </div>
        </div>
        <div className={styles.MetaDataBoxRight}>
          <LikeButton data={article.likes} />
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
