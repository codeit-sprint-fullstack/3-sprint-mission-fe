import axios from 'axios';

const BASE_URL = 'https://sprint-mission-api.vercel.app/articles';

// getArticleList() : GET 메서드를 사용해 주세요.
//  page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export function getArticleList(page, pageSize, keyword) {
  const params = { page, pageSize, keyword };

  return axios.get(BASE_URL, { params })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      if (error.response) {
        console.error(`지정 에러: ${error.response.status} - ${error.response.statusText}`);
      } else {
        console.error("기타 에러:", error.message);
      }
    });
}

// getArticle() : GET 메서드를 사용해 주세요.
export function getArticle(id) {
  const url = `${BASE_URL}/${id}`;

  return axios.get(url)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      if (error.response) {
        console.error(`지정 에러: ${error.response.status} - ${error.response.statusText}`);
      } else {
        console.error("기타 에러:", error.message);
      }
    });
}

// createArticle() : POST 메서드를 사용해 주세요.
//  request body에 title, content, image 를 포함해 주세요.
export function createArticle(title, content, image) {
  const articleData = { title, content, image };

  return axios.post(BASE_URL, articleData)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      if (error.response) {
        console.error(`지정 에러: ${error.response.status}`);
      } else {
        console.error("기타 에러:", error.message);
      }
    });
}

// patchArticle() : PATCH 메서드를 사용해 주세요.
export function patchArticle(id, updateData) {
  const url = `${BASE_URL}/${id}`;

  return axios.patch(url, updateData)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      if (error.response) {
        console.error(`지정 에러: ${error.response.status} ${error.response.statusText}`);
      } else {
        console.error("기타 에러:", error.message);
      }
    });
}

// deleteArticle() : DELETE 메서드를 사용해 주세요.
export function deleteArticle(id) {
  const url = `${BASE_URL}/${id}`;

  return axios.delete(url)
    .then(response => {
      console.log(response.status);
      console.log(response.statusText);
      return response;
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        console.error(`삭제 실패: ID ${id}에 해당하는 기사를 찾을 수 없습니다.`);
      } else {
        console.error(`기타 에러: ${error.message}`);
      }
    });
}