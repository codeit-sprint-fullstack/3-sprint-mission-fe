export default function formatUpdatedTime(updatedAt) {
  const updatedTime = new Date(updatedAt); // 문자열을 Date 객체로 변환
  const now = new Date(); // 현재 시간

  const diffMs = now - updatedTime; // 시간 차이 (밀리초)
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60)); // 시간 단위로 변환
  const diffDays = Math.floor(diffHours / 24); // 일 단위로 변환

  if (diffDays > 0) {
    // 하루 이상이면 며칠 전에 썼는지 표시
    const date = updatedTime.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return `${date}`;
  } else {
    // 하루 이내면 몇 시간 전에 썼는지 표시
    return `${diffHours}시간 전`;
  }
}
