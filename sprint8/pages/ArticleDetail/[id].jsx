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

function ArticleDetail() {
  const router = useRouter();
  const articleId = router.query.id;
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]); // 초기값을 빈 배열로 설정
  const [commentPost, setCommentPost] = useState(false);

  const articleLoadHandler = async () => {
    if (!articleId) return;
      const articleDetail = await getArticleId(articleId);
      setArticle(articleDetail);
  };

  const commentLoadHandler = async () => {
    if (!articleId) return;
    const articleComments = await getComments(articleId);
    setComments(articleComments.comments || []); // comments 배열만 추출
    console.log("Fetched comments:", articleComments.comments);
  };


  useEffect(() => {
    if (!articleId) return;

    articleLoadHandler();
    commentLoadHandler();
  }, [articleId, commentPost]);

  if (!article) return <p>Loading article...</p>;

  return (
    <div className={styles.ArticleDetailBox}>
      <ArticleInfo article={article} />
      <CommentPost articleId={articleId} commentPost={setCommentPost} />

      {comments.map((comment, index) => (
        <Comments key={index} comment={comment} commentLoadHandler={commentLoadHandler} />
      ))}
      {comments.length ? null : <NoneComments />}
      <Link href="/CommunityFeed">
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
