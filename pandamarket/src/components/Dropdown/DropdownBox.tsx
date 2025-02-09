import styles from "@/components/Dropdown/DropdownBox.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "@/lib/axios";
import { useState } from "react";

interface DropdownMenuProps {
  postId: number;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function DropdownMenu({ postId, onEdit, onDelete }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/board/${postId}`); // 삭제 요청
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
        alt="Dropdown"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <ul className={styles.dropdownmenu}>
          <li className={styles.editMenu}>
            <Link href="/post">수정하기</Link>
          </li>
          <li onClick={handleDelete} className={styles.deleteMenu}>
            삭제하기
          </li>
        </ul>
      )}
    </div>
  );
}
