import styles from "@/styles/components/ArticleDetail/EditDeletMenu.module.css";

function EditDeletMenu({ onToggleMenu }) {
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
        onClick={() => {
          onToggleMenu(false);
        }}
        className={styles.deletMenu}>
        삭제하기
      </button>
    </div>
  )
}

export default EditDeletMenu;