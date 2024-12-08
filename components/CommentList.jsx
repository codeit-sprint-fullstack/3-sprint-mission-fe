import { useEffect, useState } from "react";
import { commentAPI } from "@/lib/axios";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import styles from "./CommentList.module.css";

export default function CommentList({ articleId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await commentAPI.getArticleComments(articleId);
        setComments(response.data);
      } catch (error) {
        console.error("댓글 가져오기 실패:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [articleId]);

  // 댓글 등록 후 리스트 업데이트
  const addComment = async (newComment) => {
    try {
      await commentAPI.postArticleComment(articleId, newComment);
      const response = await commentAPI.getArticleComments(articleId); // 새 댓글 목록 가져오기
      setComments(response.data); // 상태 업데이트
    } catch (error) {
      console.error("댓글 등록 실패:", error);
    }
  };

  if (loading) {
    return <div className={styles.loading}>로딩중...</div>;
  }

  return (
    <div className={styles.commentList}>
      <CommentForm onAddComment={addComment} />
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      ) : (
        <div className={styles.noResult}>
          아직 댓글이 없어요,
          <br />
          지금 댓글을 달아보세요!
        </div>
      )}
    </div>
  );
}
