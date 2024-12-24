import { useEffect, useState } from "react";
import { commentAPI } from "@/lib/axios";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import styles from "./CommentList.module.css";

export default function CommentList({ articleId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false); // 더보기 로딩 상태
  const [cursor, setCursor] = useState(null); // 다음 커서를 저장
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  // 댓글 목록 가져오기
  useEffect(() => {
    async function fetchComments() {
      setLoading(true);
      try {
        const response = await commentAPI.getArticleComments(articleId, {
          limit: 3, // 한 번에 가져올 댓글 개수
          cursor: null, // 첫 호출에서는 커서를 사용하지 않음
        });
        setComments(response.data.list); // 댓글 데이터 설정
        setCursor(response.data.nextCursor); // 다음 커서 설정
      } catch (error) {
        console.error("댓글 가져오기 실패:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [articleId]);

  // 더보기 클릭 핸들러
  const handleLoadMore = async () => {
    if (!cursor || loadingMore) return; // 더 가져올 데이터가 없거나 로딩 중이면 중단
    setLoadingMore(true);
    try {
      const response = await commentAPI.getArticleComments(articleId, {
        limit: 3,
        cursor, // 현재 커서를 사용
      });
      setComments((prevComments) => [...prevComments, ...response.data.list]); // 기존 댓글에 추가
      setCursor(response.data.nextCursor); // 새로운 커서 업데이트
    } catch (error) {
      console.error("더 가져오기 실패:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  // 댓글 추가
  const addComment = async (newComment) => {
    try {
      await commentAPI.postArticleComment(articleId, newComment);
      const response = await commentAPI.getArticleComments(articleId, {
        limit: 3,
      }); // 새 댓글 포함하여 목록 갱신
      setComments(response.data.list);
      setCursor(response.data.nextCursor);
    } catch (error) {
      console.error("댓글 등록 실패:", error);
    }
  };

  // 댓글 수정
  const handleModify = async (commentId, newContent) => {
    try {
      await commentAPI.modifyArticleComment(commentId, { content: newContent });
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, content: newContent, updatedAt: new Date() }
            : comment
        )
      );
    } catch (error) {
      console.error("댓글 수정 실패:", error);
    }
  };

  // 댓글 삭제
  const handleDelete = async (commentId) => {
    try {
      await commentAPI.deleteArticleComment(commentId);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
    }
  };

  // 메뉴 토글
  const handleMenuToggle = (commentId) => {
    setSelectedCommentId((prevId) => (prevId === commentId ? null : commentId));
  };

  // 오버레이 클릭 시 메뉴 닫기
  const handleOverlayClick = () => {
    setSelectedCommentId(null);
  };

  // 로딩 상태 표시
  if (loading) {
    return <div className={styles.loading}>로딩중...</div>;
  }

  return (
    <div className={styles.commentList}>
      {/* 오버레이 렌더링 */}
      {selectedCommentId && (
        <div className={styles.overlay} onClick={handleOverlayClick}></div>
      )}

      {/* 댓글 작성 폼 */}
      <CommentForm onAddComment={addComment} />

      {/* 댓글 목록 */}
      {comments.length > 0 ? (
        <>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              isMenuOpen={selectedCommentId === comment.id}
              onMenuToggle={() => handleMenuToggle(comment.id)}
              onModify={handleModify}
              onDelete={handleDelete}
            />
          ))}
          {cursor && ( // 커서가 있을 경우에만 더보기 버튼 표시
            <div
              className={styles.loadMoreButton}
              onClick={handleLoadMore}
              disabled={loadingMore}
            >
              {loadingMore ? "불러오는 중..." : "더보기"}
            </div>
          )}
        </>
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
