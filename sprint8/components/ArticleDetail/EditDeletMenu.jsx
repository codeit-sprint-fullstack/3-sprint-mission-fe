import { deleteComment, deleteArticle } from "@/lib/pandaMarketApiService";
import { useRouter } from "next/router";
import styles from "@/styles/components/ArticleDetail/EditDeletMenu.module.css";
import useComment from "@/hooks/useComment";

function EditDeletMenu({ onToggleMenu, commentId, handleDeleteComment, articleId, article, setArticleEditDelete }) {
  const router = useRouter();

  const handleDeleteArticle = async () => {
    const response = await deleteArticle(articleId);
    console.log("deleteArticleresponse : ", response);
    router.push('/community-feed');
  }

  return (
    <div className={styles.editDeletMenuBox}>
      <button
        onClick={() => {
          onToggleMenu(false);
        }}
        className={styles.editMenu}>
        수정하기
      </button>
      <button
        onClick={(e) => {
          if (article) {
            handleDeleteArticle();
            setArticleEditDelete(false);
            return;
          }
          handleDeleteComment(commentId);
          onToggleMenu(false);
        }}
        className={styles.deletMenu}>
        삭제하기
      </button>
    </div >
  )
}

export default EditDeletMenu;
