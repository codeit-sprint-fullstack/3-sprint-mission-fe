const BASE_URL = 'https://sprint-mission-api.vercel.app/articles'

export function getArticleList(page, pageSize, keyword) {
  const url = `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${encodeURIComponent(keyword)}`

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`에러: ${response.status} - ${response.statusText}`); // 내가 지정한 오류 핸들링
      return response.json();
    })
    .catch(error => {
      console.error("에러 발생:", error); // 서버 등 예측하지 못한 에러 위해
    });
}