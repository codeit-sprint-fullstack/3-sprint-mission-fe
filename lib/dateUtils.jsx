/**
 * 절대적 시간 함수
 * 입력된 날짜(createdAt)를 "YYYY.MM.DD" 형식으로 포맷.
 *
 * @param {string|Date} createdAt - 포맷할 기준 날짜
 * @returns {string} 포맷된 날짜 문자열 (예: "2024.12.10")
 *
 * @example
 * // 문자열로 된 날짜를 포맷
 * const formattedDate = getFormattedDate("2024-12-10T12:34:56Z");
 * console.log(formattedDate); // "2024.12.10"
 *
 * // Date 객체를 포맷
 * const formattedDate = getFormattedDate(new Date());
 * console.log(formattedDate); // "2024.12.10"
 */
export const getFormattedDate = (createdAt) => {
  const createdTime = new Date(createdAt); // createdAt을 Date 객체로 변환
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric", // 연도를 4자리로 표시
    month: "2-digit", // 월을 2자리 숫자로 표시 (01~12)
    day: "2-digit", // 일을 2자리 숫자로 표시 (01~31)
  })
    .format(createdTime) // 지정된 형식으로 날짜를 포맷
    .replace(/\.$/, ""); // 마지막에 붙는 점(.) 제거
};

/**
 * 상대적 시간 함수
 * 입력된 날짜(createdAt)를 현재 시간과 비교해 상대적 시간(방금 전, n분 전 등)을 반환
 * - 60초 미만: "방금 전"
 * - 10~50분: "n분 전" (10, 20, 30, 40, 50)
 * - 1~23시간: "n시간 전"
 * - 1~3일: "n일 전"
 * - 그 외: YYYY.MM.DD 형식 반환 (예: "2024.12.10")
 *
 * @param {string|Date} createdAt - 상대적 시간을 계산할 기준 날짜
 * @returns {string} 상대적 시간 또는 절대적 시간 (예: "방금 전", "3일 전", "2024.12.10")
 *
 * @example
 * // 댓글 생성일을 기준으로 상대적 시간 계산
 * const relativeTime = getRelativeTime(comment.createdAt);
 * console.log(relativeTime); // "2시간 전"
 */
export const getRelativeTime = (createdAt) => {
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
