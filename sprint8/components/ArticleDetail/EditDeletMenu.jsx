import { deleteComment, deleteArticle } from "@/lib/pandaMarketApiService";
import { useRouter } from "next/router";
import styles from "@/styles/components/ArticleDetail/EditDeletMenu.module.css";

function EditDeletMenu({ onToggleMenu, commentId, commentLoadHandler, articleId, article, setArticleEditDelete }) {
  const router = useRouter();

  const handleDeleteComment = async () => {
    const response = await deleteComment(commentId);
    console.log("response : ", response);
    onToggleMenu(false);
    commentLoadHandler();
  }

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
          handleDeleteComment();
        }}
        className={styles.deletMenu}>
        삭제하기
      </button>
    </div >
  )
}

export default EditDeletMenu;
