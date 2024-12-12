import { useEffect, useState } from "react";
import { commentAPI } from "@/lib/axios";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import styles from "./CommentList.module.css";

export default function CommentList({ articleId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCommentId, setSelectedCommentId] = useState(null); // 메뉴 열려 있는 댓글 ID

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await commentAPI.getArticleComments(articleId); // 댓글 가져오기
        setComments(response.data);
      } catch (error) {
        console.error("댓글 가져오기 실패:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [articleId]);

  const handleMenuToggle = (commentId) => {
    setSelectedCommentId((prevId) => (prevId === commentId ? null : commentId)); // 메뉴 토글
  };

  const handleOverlayClick = () => {
    setSelectedCommentId(null); // 메뉴 닫기
  };

  const addComment = async (newComment) => {
    try {
      await commentAPI.postArticleComment(articleId, newComment);
      const response = await commentAPI.getArticleComments(articleId); // 새 댓글 목록 가져오기
      setComments(response.data);
    } catch (error) {
      console.error("댓글 등록 실패:", error);
    }
  };

  const handleModify = async (commentId, newContent) => {
    try {
      await commentAPI.modifyArticleComment(commentId, newContent); // 수정 API 호출
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, content: newContent, updatedAt: new Date() } // 수정된 내용 반영
            : comment
        )
      );
    } catch (error) {
      console.error("댓글 수정 실패:", error);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await commentAPI.deleteArticleComment(commentId); // 삭제 API 호출
      setComments(
        (prevComments) =>
          prevComments.filter((comment) => comment.id !== commentId) // 삭제된 댓글 제거
      );
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
    }
  };

  if (loading) {
    return <div className={styles.loading}>로딩중...</div>;
  }

  return (
    <div className={styles.commentList}>
      {selectedCommentId && (
        <div className={styles.overlay} onClick={handleOverlayClick}></div> // 오버레이 렌더링
      )}
      <CommentForm onAddComment={addComment} />
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            isMenuOpen={selectedCommentId === comment.id} // 메뉴 상태 전달
            onMenuToggle={() => handleMenuToggle(comment.id)} // 토글 함수 전달
            onModify={handleModify}
            onDelete={handleDelete}
          />
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
