const BASE_URL = 'https://sprint-mission-api.vercel.app/articles'



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



export async function createArticle(ArticleTitle, ArticleContent, ArticleImage) {
  const articleData = {
    title: ArticleTitle,
    content: ArticleContent,
    image: ArticleImage
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



export async function deleteArticle(id) {
  const url = `${BASE_URL}/${id}`

  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`지정 에러: ${response.status} ${response.statusText}`);
    }

    console.log(response);
    return response;
  } catch (error) {
    console.error("기타 에러:", error);
  }
}