import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/CommunityFeed/Articles.module.css';
import ArticleSearchInput from '@/components/CommunityFeed/ArticleSearchInput';
import DropdownList from '@/components/CommunityFeed/DropdownList';
import { getArticles } from '@/lib/pandaMarketApiService';
import formatDate from '@/lib/formatDate';

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  // const [searchKeyword, setSearchKeyword] = useState("");
  // console.log("searchKeyword : ", searchKeyword);

  useEffect(() => {
    const loadHandler = async () => {
      try {
        //   if (searchKeyword !== "") {
        //     const articlesList = await getArticles(searchKeyword, 0, 4, 'recent');
        //     setArticles(articlesList);
        //     return;

        //   } else if (searchKeyword === "")

        const articlesList = await getArticles(0, 4, 'recent');
        setArticles(articlesList);

      } catch (error) {
        console.error('Error fetching best articles:', error);
      }
    };

    loadHandler();
  }, []);

  const Articles = articles.article || [];

  const handleSearchKeywordChange = (value) => {
    setSearchKeyword(value);
  };

  if (!articles) return null;

  return (
    <div style={{ width: '1200px' }}>
      <div className={styles.searchSortBox}>
        <ArticleSearchInput onChange={handleSearchKeywordChange} />
        <DropdownList />
      </div>
      <div className={styles.articlesListBody}>
        {Articles.map((article, index) => (
          <Link key={index} href={`/ArticleDetail/${article.id}`} passHref>
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