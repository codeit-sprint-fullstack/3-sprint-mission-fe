import styles from "@/components/Dropdown/DropdownBox.module.css"
import Image from "next/image";
import axios from "@/lib/axios"
import { useState } from "react";

export default function CommentDropdownMenu({ commentId, onEdit, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    onEdit(commentId); // 수정 로직 실행
    setIsOpen(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/board/comment/${commentId}`); // 삭제 요청
      onDelete(postId); // 삭제 후 콜백 실행
    } catch (err) {
      console.error("Failed to delete post:", err);
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.dropdown}>
       <Image
          src="/images/ic_kebab.png"
          width={24}
          height={24}
          alt='Dropdown'
          onClick={toggleDropdown}
          />
      {isOpen && (
        <ul className={styles.dropdownmenu}>
          <li onClick={handleEdit} className={styles.editMenu}>수정하기</li>
          <li onClick={handleDelete} className={styles.deleteMenu}>삭제하기</li>
        </ul>
      )}
    </div>
  );
}