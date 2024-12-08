import styles from "@/styles/components/ArticleDetail/EditDeletMenu.module.css";
import { deleteComment } from "@/lib/pandaMarketApiService";

function EditDeletMenu({ onToggleMenu, commentId, commentLoadHandler }) {

  const handleDeleteArticle = async () => {
   
    const response = await deleteComment(commentId);
    console.log("response : ", response);
    onToggleMenu(false);
    commentLoadHandler();
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
          e.preventDefault();
          handleDeleteArticle();
        }}
        className={styles.deletMenu}>
        삭제하기
      </button>
    </div>
  )
}

export default EditDeletMenu;