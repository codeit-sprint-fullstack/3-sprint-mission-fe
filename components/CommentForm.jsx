import { useState } from "react";
import styles from "./CommentForm.module.css";

export default function CommentForm({ onAddComment }) {
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!commentText.trim() || isSubmitting) return;
    setIsSubmitting(true);

    try {
      await onAddComment(commentText); // 부모에서 전달된 댓글 추가 함수 호출
      setCommentText(""); // 입력 초기화
    } catch (error) {
      console.error("댓글 등록 실패:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <textarea
        className={styles.commentInput}
        placeholder="댓글을 입력해주세요."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <div className={styles.buttonContainer}>
        <div
          className={`${styles.submitButton} ${
            !commentText.trim() || isSubmitting ? styles.disabled : ""
          }`}
          onClick={handleSubmit}
          disabled={!commentText.trim() || isSubmitting}
        >
          등록
        </div>
      </div>
    </div>
  );
}
