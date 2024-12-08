import { useState } from "react";
import styles from "@/styles/components/ArticleDetail/CommentPost.module.css";
import { postComment } from "@/lib/pandaMarketApiService";

function CommentPost({ articleId, commentPost }) {
  const [textareaValue, setTextareaValue] = useState("");

  const handlePostComment = async (e) => {
    e.preventDefault();
    if(textareaValue === "") return;
    const response = await postComment(articleId, textareaValue);
    console.log("response : ", response);
    commentPost(response)
    setTextareaValue('');
  }

  return (
    <div className={styles.commentPostBox}>
      <h2 className={styles.commentPostTitle}>댓글달기</h2>
      <textarea
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        className={styles.textareaContent}
        placeholder="댓글을 입력해주세요."
        id="message"
        name="message"
        rows="4"
        cols="50" />
      <div className={styles.commentPostButtonBox}>
        <button
          onClick={handlePostComment}
          className={`
          ${styles.commentPostButton}
          ${textareaValue ? styles.postButtonBlue : ''}`}>
          등록
        </button>
      </div>
    </div>
  )
}

export default CommentPost;