import styles from "@/styles/pages/CommunityFeed.module.css"

function CommunityFeed() {
  return (
    <div className={styles.communityFeedBody}>
      <div className={styles.communityFeedMain}>
      <h1 className={styles.communityFeedTitle}>베스트 게시글</h1>
      {/* 베스트 게시글 컴포넌트 */}
      <div className={styles.articlePostHeader}>
        <h1 className={styles.communityFeedTitle}>게시글</h1>
        <button className={styles.toArticlePostButton}>글쓰기</button>
      </div>
        {/* 게시글 컴포넌트 */}
        </div>
    </div>
  )
}

export default CommunityFeed;