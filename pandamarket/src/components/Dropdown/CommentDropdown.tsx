import styles from "@/components/Dropdown/DropdownBox.module.css";
import Image from "next/image";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";

interface CommentDropdownMenuProps {
  commentId: number;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function CommentDropdownMenu({ commentId, onEdit, onDelete }: CommentDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  // 사용자 인가 여부 확인
  useEffect(() => {
    axios
      .get("https://panda-market-api.vercel.app/users/me", { withCredentials: true })
      .then(() => setIsAuthorized(true))
      .catch(() => setIsAuthorized(false));
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = async () => {
    try {
      await axios.patch(
        `https://panda-market-api.vercel.app/comments/${commentId}`,
        { text: "수정된 내용입니다." }, // 여기에 수정할 내용을 추가
        { withCredentials: true }
      );
      onEdit(commentId); // 수정 후 콜백 실행
    } catch (err) {
      console.error("Failed to edit comment:", err);
      alert("댓글 수정에 실패했습니다.");
    } finally {
      setIsOpen(false); // 드롭다운 닫기
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://panda-market-api.vercel.app/comments/${commentId}`,
        { withCredentials: true }
      );
      onDelete(commentId); // 삭제 후 콜백 실행
    } catch (err) {
      console.error("Failed to delete comment:", err);
      alert("댓글 삭제에 실패했습니다.");
    } finally {
      setIsOpen(false); // 드롭다운 닫기
    }
  };

  return (
    <div className={styles.dropdown}>
      {/* 드롭다운 토글 버튼 */}
      <Image
        src="/images/ic_kebab.png"
        width={24}
        height={24}
        alt="Dropdown"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <ul className={styles.dropdownmenu}>
          {isAuthorized ? (
            <>
              <li onClick={handleEdit} className={styles.editMenu}>
                수정하기
              </li>
              <li onClick={handleDelete} className={styles.deleteMenu}>
                삭제하기
              </li>
            </>
          ) : (
            <li className={styles.unauthorizedMenu}>
              권한이 없습니다.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
