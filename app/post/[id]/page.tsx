"use client";

import Link from "next/link";

import BackButton from "@/components/common/button/BackButton";
import CommentInput from "@/components/post/PostDetail/CommentInput";
import CommentList from "@/components/post/PostDetail/CommentList";
import PostDetailContent from "@/components/post/PostDetail/PostDetailContent";

const PostDetailPage = () => {
  return (
    <article className="mx-auto max-w-[1200px]">
      {/* 게시글 내용 */}
      <PostDetailContent />

      {/* 댓글달기 */}
      <CommentInput title="댓글달기" placeholder="댓글을 입력해주세요." />

      {/* 댓글창 */}
      <CommentList />

      {/* 돌아가기 버튼 */}
      <Link href="/post">
        <BackButton> 목록으로 돌아가기</BackButton>
      </Link>
    </article>
  );
};

export default PostDetailPage;
