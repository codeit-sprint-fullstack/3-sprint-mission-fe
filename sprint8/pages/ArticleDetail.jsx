import styles from "@/styles/pages/ArticleDetail.module.css";
import ArticleInfo from "@/components/ArticleDetail/ArticleInfo";
import CommentPost from "@/components/ArticleDetail/CommentPost";
import Comments from "@/components/ArticleDetail/Comments";

function ArticleDetail() {
  return (
    <div className={styles.ArticleDetailBox}>
      <ArticleInfo />
      <CommentPost />
      <Comments />
    </div>
  )
}

export default ArticleDetail;