import React, { useState, useEffect } from "react";
import styles from "../styles/ProductDetail.module.css";

const CommentSection = ({ productId }) => {
  const [comments, setComments] = useState([]); // 댓글 목록
  const [newComment, setNewComment] = useState(""); // 새로운 댓글
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지

  // 댓글 목록 가져오기
  useEffect(() => {
    const fetchComments = async () => {
      if (!productId) return; // productId가 없으면 호출하지 않음

      try {
        const res = await fetch(
          `https://panda-market-api.vercel.app/products/${productId}/comments?limit=10`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );

        if (!res.ok) {
          throw new Error("댓글 데이터를 불러오지 못했습니다.");
        }

        const data = await res.json();

        // 응답이 배열인지 확인하고 배열이 아닌 경우 빈 배열로 설정
        setComments(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setErrorMessage("댓글 데이터를 가져오는 중 오류가 발생했습니다.");
      }
    };

    fetchComments();
  }, [productId]);

  // 댓글 추가
  const handleAddComment = async () => {
    if (!newComment.trim()) {
      setErrorMessage("댓글 내용을 입력해주세요.");
      return;
    }

    try {
      const res = await fetch(`https://panda-market-api.vercel.app/comments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, content: newComment }),
      });

      if (!res.ok) {
        throw new Error("댓글 추가 실패");
      }

      const newCommentData = await res.json();
      setNewComment(""); // 입력 필드 초기화
      setComments((prev) => [...prev, newCommentData]); // 댓글 목록 업데이트
    } catch (error) {
      console.error("Error adding comment:", error);
      setErrorMessage("댓글을 추가하는 중 오류가 발생했습니다.");
    }
  };

  // 댓글 삭제
  const handleDeleteComment = async (commentId) => {
    try {
      const res = await fetch(
        `https://panda-market-api.vercel.app/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("댓글 삭제 실패");
      }

      setComments((prev) => prev.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
      setErrorMessage("댓글을 삭제하는 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className={styles.commentSection}>
      <h3>문의하기</h3>

      {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        className={styles.textarea}
      ></textarea>

      <button onClick={handleAddComment} className={styles.commentButton}>
        등록
      </button>

      <ul className={styles.commentList}>
        {/* 배열인지 확인한 후 안전하게 .map 호출 */}
        {Array.isArray(comments) &&
          comments.map((comment) => (
            <li key={comment.id} className={styles.comment}>
              <p>{comment.content}</p>
              <div className={styles.commentActions}>
                <button onClick={() => handleDeleteComment(comment.id)}>삭제</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CommentSection;
