import styles from "@/styles/pages/ArticleDetail.module.css";
import ArticleInfo from "@/components/ArticleDetail/ArticleInfo";

function ArticleDetail() {
  return (
    <div className={styles.ArticleDetailBox}>
      <ArticleInfo />
      {/* CommentPost댓글달기와 등록 버튼 자리 */}
      {/* Comments댓글 컴포넌트 */}
    </div>
  )
}

export default ArticleDetail;