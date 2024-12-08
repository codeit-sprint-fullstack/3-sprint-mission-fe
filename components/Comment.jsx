import { useState } from "react";
import styles from "./Comment.module.css";

function Comment({ comment, isMenuOpen, onMenuToggle, onModify, onDelete }) {
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
  const [editedContent, setEditedContent] = useState(comment.content); // 수정 내용

  // 상대적 시간 계산 함수
  const getRelativeTime = (createdAt) => {
    const now = new Date();
    const createdTime = new Date(createdAt);
    const diffMs = now - createdTime;
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) {
      return `방금 전`;
    } else if (diffMinutes < 20) {
      return `10분 전`;
    } else if (diffMinutes < 30) {
      return `20분 전`;
    } else if (diffMinutes < 40) {
      return `30분 전`;
    } else if (diffMinutes < 50) {
      return `40분 전`;
    } else if (diffMinutes < 60) {
      return `50분 전`;
    } else if (diffHours < 24) {
      return `${diffHours}시간 전`;
    } else if (diffDays < 4) {
      return `${diffDays}일 전`;
    } else {
      return new Intl.DateTimeFormat("ko-KR", {
        year: "2-digit",
        month: "2-digit",
        day: "numeric",
      })
        .format(createdTime)
        .replace(/\.$/, "");
    }
  };

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
