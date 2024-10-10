export const formattedDate = () => {
  return Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'full',
    timeStyle: 'medium',
    // year: 'numeric',
    // month: 'long',
    hour12: false,
    timeZone: 'Asia/Seoul',
  }).format(new Date());
};
