"use client";

import BackButton from "@/components/common/button/BackButton";
import CommentInput from "@/components/common/comment/CommentInput";
import CommentList from "@/components/common/comment/CommentList";
import PostDetailContent from "@/components/post/PostDetail/PostDetailContent";

const PostDetailPage = ({ params }: { params: { id: string } }) => {
  const { id: productId } = params;

  return (
    <article className="mx-auto max-w-[1200px]">
      {/* 게시글 내용 */}
      <PostDetailContent />

      {/* 댓글달기 */}
      <CommentInput
        title="댓글달기"
        placeholder="댓글을 입력해주세요."
        productId={productId}
      />

      {/* 댓글창 */}
      <CommentList id={productId} />

      {/* 돌아가기 버튼 */}
      <BackButton backPath="/post"> 목록으로 돌아가기</BackButton>
    </article>
  );
};

export default PostDetailPage;
