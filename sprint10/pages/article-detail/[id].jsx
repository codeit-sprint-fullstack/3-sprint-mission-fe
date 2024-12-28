import { useRouter } from "next/router";
import styles from "@/styles/pages/ArticleDetail.module.css";
import ArticleInfo from "@/components/ArticleDetail/ArticleInfo";
import Comments from "@/components/shared/Comments";
import useArticleId from "@/hooks/useArticleId";
import useComment from "@/hooks/useComment";
import CommentAndQuestionInput from "@/components/shared/CommentAndQuestionInput";
import BackToListButton from "@/components/shared/BackToListButton";
import NotFoundComment from "@/components/shared/NotFoundComment";

function ArticleDetail() {
  const router = useRouter();
  const articleId = router.query.id;

  const { article, isLoading, hasError } = useArticleId(articleId) || [];
  const { comments, handleDeleteComment, handlePostComment, setTextareaValue, textareaValue } = useComment(articleId) || [];

  // loading, error 일 때의 화면 처리 디자인 필요(다음에)
  if (isLoading) { return <div style={{ marginTop: "100px" }}>Loading...</div>; }
  if (hasError) {
    return <div>Error loading article. Please try again later.</div>;
  }
  if (!article || article.length === 0) {
    return <div>No article found.</div>;
  }

  return (
    <div className={styles.ArticleDetailBox}>
      <ArticleInfo article={article} />
      <CommentAndQuestionInput
        type='comment'
        submitHandler={handlePostComment}
        setTextareaValue={setTextareaValue}
        textareaValue={textareaValue}
      />

      {comments.map((comment, index) => (
        <Comments key={index} comment={comment} handleDeleteComment={handleDeleteComment} />
      ))}
      {comments.length ? null : <NotFoundComment type='comment' />}

      <BackToListButton type="article" />
    </div>
  );
}

export default ArticleDetail;
