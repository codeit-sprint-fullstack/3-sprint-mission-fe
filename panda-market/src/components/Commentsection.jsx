import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "../styles/ProductDetail.module.css";

const fetchComments = async (productId) => {
  const res = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}/comments?limit=10`,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );

  if (!res.ok) {
    throw new Error("댓글 데이터를 불러오지 못했습니다.");
  }

  return res.json();
};

const addComment = async ({ productId, content }) => {
  const res = await fetch(`https://panda-market-api.vercel.app/comments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, content }),
  });

  if (!res.ok) {
    throw new Error("댓글 추가 실패");
  }

  return res.json();
};

const deleteComment = async (commentId) => {
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
};

const CommentSection = ({ productId }) => {
  const queryClient = useQueryClient();

  const { data: comments = [], error, isLoading } = useQuery({
    queryKey: ["comments", productId],
    queryFn: () => fetchComments(productId),
    enabled: !!productId, // productId가 있을 때만 실행
  });

  const addCommentMutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", productId]); // 데이터 새로고침
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", productId]); // 데이터 새로고침
    },
  });

  const handleAddComment = (content) => {
    if (!content.trim()) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }
    addCommentMutation.mutate({ productId, content });
  };

  const handleDeleteComment = (commentId) => {
    deleteCommentMutation.mutate(commentId);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류가 발생했습니다: {error.message}</div>;

  return (
    <div className={styles.commentSection}>
      <h3>문의하기</h3>

      <textarea
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        className={styles.textarea}
        onBlur={(e) => handleAddComment(e.target.value)}
      ></textarea>

      <ul className={styles.commentList}>
        {comments.map((comment) => (
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
