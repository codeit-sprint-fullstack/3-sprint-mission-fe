export const handler = (error) => {
  if (error.status < 200 || error.status > 300) {
    throw new Error('응답상태가 2xx가 아닙니다.');
  }
};
