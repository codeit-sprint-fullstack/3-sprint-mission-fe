import styles from "@/styles/pages/ArticlePost.module.css";

function ArticlePost() {
  return (
    <div className={styles.ArticlePostContent}>
      <div className={styles.articlePostBox}>
        <div className={styles.articlePostHeader}>
          <h1 className={styles.articlePostHeaderTitle}>
            게시글 쓰기
          </h1>
          <button className={styles.articlePostBoutton}>
            등록
          </button>
        </div>
        <div className={styles.articlePostTitleBox}>
          <h2 className={styles.articlePostInputName}>*제목</h2>
          {/* 제목 input 자리 */}
        </div>
        <div className={styles.articlePostContentBox}>
          <h2 className={styles.articlePostInputName}>*내용</h2>
          {/* 내용 textarea 자리 */}
        </div>
      </div>
    </div>
  )
}

export default ArticlePost;