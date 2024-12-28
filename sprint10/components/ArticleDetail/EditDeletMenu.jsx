import { deleteComment, deleteArticle } from "@/lib/pandaMarketApiService";
import { useRouter } from "next/router";
import styles from "@/styles/components/ArticleDetail/EditDeletMenu.module.css";

function EditDeletMenu({
  onToggleMenu,
  commentId,
  handleDeleteComment,
  id,
  article,
  setItemEditDelete,
  setPatchComment }) {

  const router = useRouter();

  const handleDeleteArticle = async () => {
    const response = await deleteArticle(id);
    router.push('/community-feed');
  }

  return (
    <div className={styles.editDeletMenuBox}>
      <button
        onClick={() => {
          onToggleMenu(false);
          setPatchComment(true);
        }}
        className={styles.editMenu}>
        수정하기
      </button>
      <button
        onClick={() => {
          if (article) {
            handleDeleteArticle();
            setItemEditDelete(false);
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
