import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getArticleId, getComments } from "@/lib/pandaMarketApiService";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/pages/ArticleDetail.module.css";
import ArticleInfo from "@/components/ArticleDetail/ArticleInfo";
import CommentPost from "@/components/ArticleDetail/CommentPost";
import Comments from "@/components/ArticleDetail/Comments";
import NoneComments from "@/components/ArticleDetail/NoneComments";
import useArticleId from "@/hooks/useArticleId";
import useComment from "@/hooks/useComment";

function ArticleDetail() {
  const router = useRouter();
  const articleId = router.query.id;

  const articles = useArticleId(articleId) || [];
  const { comments, handleDeleteComment, handlePostComment, setTextareaValue, textareaValue } = useComment(articleId) || [];

  if (!articles) return <p>Loading article...</p>;

  return (
    <div className={styles.ArticleDetailBox}>
      <ArticleInfo articles={articles} />
      <CommentPost handlePostComment={handlePostComment} setTextareaValue={setTextareaValue} textareaValue={textareaValue} />

      {comments.map((comment, index) => (
        <Comments key={index} comment={comment} handleDeleteComment={handleDeleteComment} />
      ))}
      {comments.length ? null : <NoneComments />}
      <Link href="/community-feed">
        <button className={styles.toCommunityFeedButton}>
          목록으로 돌아가기
          <div className={styles.toCommunityFeedButtonImage}>
            <Image
              src="/images/icons/backArrow.png"
              alt="목록으로 돌아가기 이미지"
              width={19}
              height={16}
            />
          </div>
        </button>
      </Link>
    </div>
  );
}

export default ArticleDetail;
