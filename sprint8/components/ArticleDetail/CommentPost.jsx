import styles from "@/styles/components/ArticleDetail/CommentPost.module.css";


function CommentPost() {
  return (
    <div className={styles.commentPostBox}>
      <h2 className={styles.commentPostTitle}>댓글달기</h2>
      <textarea
        className={styles.textareaContent}
        placeholder="댓글을 입력해주세요."
        id="message"
        name="message"
        rows="4"
        cols="50" />
      <div className={styles.commentPostButtonBox}>
        <button className={styles.commentPostButton}>
          등록
        </button>
      </div>
    </div>
  )
}

export default CommentPost;