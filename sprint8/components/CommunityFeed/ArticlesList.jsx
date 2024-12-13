import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/CommunityFeed/Articles.module.css';
import ArticleSearchInput from '@/components/CommunityFeed/ArticleSearchInput';
import DropdownList from '@/components/CommunityFeed/DropdownList';
import formatDate from '@/lib/formatDate';
import useArticle from '@/hooks/useArticle';

function ArticlesList() {
  
  const articlesList = useArticle(4, 'recent');
  const Articles = articlesList.article || [];

  if (!articlesList) return null;

  return (
    <div style={{ width: '1200px' }}>
      <div className={styles.searchSortBox}>
        <ArticleSearchInput />
        <DropdownList />
      </div>
      <div className={styles.articlesListBody}>
        {Articles.map((article, index) => (
          <Link key={index} href={`/article-detail/${article.id}`} passHref>
            <div className={styles.article}>
              <div className={styles.articleContent}>
                <h2 className={styles.articleTitle}>{article.title}</h2>
                <Image
                  src="/images/default/FE_default_Img.png"
                  alt="베스트 게시글 이미지"
                  width={72}
                  height={72}
                />
              </div>
              <div className={styles.articleInfoBox}>
                <div className={styles.articleInfoLeft}>
                  <Image
                    src="/images/icons/ic_profile.png"
                    alt="프로필 이미지"
                    width={24}
                    height={24}
                  />
                  <span className={styles.nickname}>총명한판다</span>
                  <div className={styles.articleCreateDate}>
                    {formatDate(article.createdAt)}
                  </div>
                </div>
                <div className={styles.articleInfoRight}>
                  <Image
                    src="/images/icons/heart.png"
                    alt="하트 이미지"
                    width={13.75}
                    height={13}
                  />
                  <div className={styles.articleLikeNum}>{article.likes}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;