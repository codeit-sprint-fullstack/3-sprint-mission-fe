const BASE_URL = 'https://sprint-mission-api.vercel.app/articles'



// getArticleList() : GET 메서드를 사용해 주세요.
//  page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export function getArticleList(page, pageSize, keyword) {
  const url = `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${encodeURIComponent(keyword)}`

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
export async function createArticle(title, content, image) {
  const articleData = {
    title,
    content,
    image,
  };

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(articleData),
    });

    if (!response.ok) {
      throw new Error(`지정 에러: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data
  } catch (error) {
    console.error("기타 에러:", error);
  }
}



//  patchArticle() : PATCH 메서드를 사용해 주세요.
export async function patchArticle(id, updateData) {
  const url = `${BASE_URL}/${id}`

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error(`지정 에러: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data
  } catch (error) {
    console.error("기타 에러:", error);
  }
}



//  deleteArticle() : DELETE 메서드를 사용해 주세요.
export async function deleteArticle(id) {
  const url = `${BASE_URL}/${id}`

  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`지정 에러: ${response.status} ${response.statusText}`);
    }

    console.log(response.status);
    console.log(response.statusText);
    return response;
  } catch (error) {
    console.error("기타 에러:", error);
  }
}