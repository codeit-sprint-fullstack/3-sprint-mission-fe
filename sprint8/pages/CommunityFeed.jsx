// pages/CommunityFeed.js

import Link from "next/link";
import styles from "@/styles/pages/CommunityFeed.module.css";
import BestArticles from "@/components/CommunityFeed/BestArticles";
import ArticlesList from "@/components/CommunityFeed/ArticlesList";

function CommunityFeed({ articles }) {
  return (
    <div className={styles.communityFeedBody}>
      <div className={styles.communityFeedMain}>
        <h1 className={styles.communityFeedTitle}>베스트 게시글</h1>
        <BestArticles />
        <div className={styles.articlePostHeader}>
          <h1 className={styles.communityFeedTitle}>게시글</h1>
          <Link href="/ArticlePost">
            <button className={styles.toArticlePostButton}>
              글쓰기
            </button>
          </Link>
        </div>
        <ArticlesList articles={articles} />
      </div>
    </div>
  );
}

export default CommunityFeed;
