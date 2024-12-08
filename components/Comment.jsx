import styles from "./Comment.module.css";

function Comment({ comment }) {
  const getRelativeTime = (createdAt) => {
    const now = new Date();
    const createdTime = new Date(createdAt);
    const diffMs = now - createdTime; // 시간 차이 (밀리초)
    const diffSeconds = Math.floor(diffMs / 1000); // 초 단위 차이
    const diffMinutes = Math.floor(diffSeconds / 60); // 분 단위 차이
    const diffHours = Math.floor(diffMinutes / 60); // 시간 단위 차이
    const diffDays = Math.floor(diffHours / 24); // 일 단위 차이

    if (diffSeconds < 60) {
      return `방금 전`; // 1분 미만
      // } else if (diffMinutes < 10) {
      //   return `${diffMinutes}분 전`; // 1~9분
    } else if (diffMinutes < 20) {
      return `10분 전`; // 10~19분
    } else if (diffMinutes < 30) {
      return `20분 전`; // 20~29분
    } else if (diffMinutes < 40) {
      return `30분 전`; // 30~39분
    } else if (diffMinutes < 50) {
      return `40분 전`; // 40~49분
    } else if (diffMinutes < 60) {
      return `50분 전`; // 50~59분
    } else if (diffHours < 24) {
      return `${diffHours}시간 전`; // 1~23시간
    } else if (diffDays < 4) {
      return `${diffDays}일 전`; // 1~3일
    } else {
      // 4일 이상은 기존 날짜 포맷 반환
      return new Intl.DateTimeFormat("ko-KR", {
        year: "2-digit",
        month: "2-digit",
        day: "numeric",
      })
        .format(createdTime)
        .replace(/\.$/, ""); // 날짜 포맷에서 마지막 마침표 제거
    }
  };

  const relativeTime = getRelativeTime(comment.createdAt);

  const isEdited = comment.updatedAt && comment.updatedAt !== comment.createdAt;

  return (
    <div className={styles.comment}>
      <div className={styles.content}>{comment.content}</div>
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
    </div>
  );
}

export default Comment;
