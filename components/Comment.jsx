import { useState } from "react";
import { getRelativeTime } from "@/lib/dateUtils";
import styles from "./Comment.module.css";

function Comment({ comment, isMenuOpen, onMenuToggle, onModify, onDelete }) {
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
  const [editedContent, setEditedContent] = useState(comment.content); // 수정 내용

  const relativeTime = getRelativeTime(comment.createdAt);
  const isEdited = comment.updatedAt && comment.updatedAt !== comment.createdAt;

  const handleSave = () => {
    if (editedContent.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    onModify(comment.id, editedContent); // 수정 요청
    setIsEditing(false); // 수정 모드 해제
  };

  const handleCancel = () => {
    setIsEditing(false); // 수정 모드 해제
    setEditedContent(comment.content); // 내용 복원
  };

  return (
    <div className={styles.comment}>
      {isEditing ? (
        // 수정 모드
        <div className={styles.editMode}>
          <textarea
            className={styles.modifyInput}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className={styles.buttonContainer}>
            <button className={styles.cancelButton} onClick={handleCancel}>
              취소
            </button>
            <button className={styles.submitButton} onClick={handleSave}>
              수정 완료
            </button>
          </div>
        </div>
      ) : (
        // 일반 모드
        <div className={styles.content}>{comment.content}</div>
      )}

      {/* 공통 정보 및 옵션 */}
      <div>
        <div className={styles.infoBox}>
          <img
            src="/user_profile.png"
            alt="user_profile"
            className={styles.userImg}
          />
          <div className={styles.columnBox}>
            <div>똑똑한판다</div>
            <div>
              {relativeTime} {isEdited && "(수정됨)"}
            </div>
          </div>
        </div>
        {!isEditing && (
          <>
            <span
              className={styles.optionButton}
              onClick={onMenuToggle} // 메뉴 토글
            ></span>
            {isMenuOpen && (
              <div className={styles.menu}>
                <p
                  onClick={() => {
                    setIsEditing(true); // 수정 모드로 전환
                    onMenuToggle(null); // 메뉴 닫기
                  }}
                >
                  수정하기
                </p>
                <p
                  onClick={() => {
                    onDelete(comment.id); // 삭제 처리
                    onMenuToggle(null); // 메뉴 닫기
                  }}
                >
                  삭제하기
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
