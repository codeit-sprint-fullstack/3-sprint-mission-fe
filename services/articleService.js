const BASE_URL = 'https://sprint-mission-api.vercel.app/articles'



// getArticleList() : GET 메서드를 사용해 주세요.
//  page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export function getArticleList(page, pageSize, keyword) {
  const params = new URLSearchParams ({
    page,
    pageSize,
    keyword
  });
  
  const url = `${BASE_URL}?${params}`

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`지정 에러: ${response.status} - ${response.statusText}`); // 내가 지정한 오류 핸들링
      return response.json().then(data => {
        console.log(data);
        return data
      });
    })
    .catch(error => {
      console.error("기타 에러:", error); // 서버 등 예측하지 못한 에러 위해
    });
}



//  getArticle() : GET 메서드를 사용해 주세요.
export function getArticle(id) {
  const url = `${BASE_URL}/${id}`

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`지정 에러: ${response.status} - ${response.statusText}`); // 내가 지정한 오류 핸들링
      return response.json().then(data => {
        console.log(data);
        return data;
      });
    })
    .catch(error => {
      console.error("기타 에러:", error); // 서버 등 예측하지 못한 에러 위해
    });
}



//  createArticle() : POST 메서드를 사용해 주세요.
//  request body에 title, content, image 를 포함해 주세요.
export function createArticle(title, content, image) {
  const articleData = {
    title,
    content,
    image,
  };

  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(articleData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`지정 에러: ${response.status}`);
      }
      return response.json(); // JSON 형태로 응답을 파싱
    })
    .then(data => {
      console.log(data);
      return data; // 데이터 반환
    })
    .catch(error => {
      console.error("기타 에러:", error);
    });
}



//  patchArticle() : PATCH 메서드를 사용해 주세요.
export function patchArticle(id, updateData) {
  const url = `${BASE_URL}/${id}`;

  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`지정 에러: ${response.status} ${response.statusText}`);
      }
      return response.json(); // JSON 형태로 응답을 파싱
    })
    .then(data => {
      console.log(data);
      return data; // 데이터 반환
    })
    .catch(error => {
      console.error("기타 에러:", error.message);
    });
}



//  deleteArticle() : DELETE 메서드를 사용해 주세요.
export function deleteArticle(id) {
  const url = `${BASE_URL}/${id}`

  return fetch(url, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`삭제 실패: ID ${id}에 해당하는 기사를 찾을 수 없습니다.`);
        } else {
          throw new Error(`지정 에러: ${response.status} ${response.statusText}`);
        }
      }

      console.log(response.status);
      console.log(response.statusText);
      return response;
    })
    .catch(error => {
      console.error("기타 에러:", error.message);
    });
}