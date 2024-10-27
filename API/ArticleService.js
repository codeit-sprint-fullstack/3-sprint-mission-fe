import axios from 'axios';

export async function getArticleList(page, pageSize, keyword) {
  try {
    const response = await axios.get("https://sprint-mission-api.vercel.app/articles", {
        page: page,
        pageSize: pageSize,
        keyword: keyword
    });
    if (response.status < 200 || response.status >= 300) {
      console.error("Error: Non-2xx response status", response.status)
      throw new Error(`Error: status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}
  
// const getArticle = fetch("https://sprint-mission-api.vercel.app/articles") // get
export async function getArticle(articleId) {
  try {
    const response = await axios.get("https://sprint-mission-api.vercel.app/articles");
    if (response.status < 200 || response.status >= 300) {
      console.error("Error: Non-2xx response status", response.status)
      throw new Error(`Error: status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}


// const createArticle = fetch("https://sprint-mission-api.vercel.app/articles") // POST
export async function createArticleList(title, content, image) {
  try {
    const response = await axios.post("https://sprint-mission-api.vercel.app/articles", {

        title: "title",
        content: "content",
        image: "image"
        
    });
    if (response.status < 200 || response.status >= 300) {
      console.error("Error: Non-2xx response status", response.status)
      throw new Error(`Error: status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}



// const PatchArticle = fetch("https://sprint-mission-api.vercel.app/articles") // PATCH
export async function PatchArticle(articlepatch) {
  try {
    const response = await axios.patch("https://sprint-mission-api.vercel.app/articles");
    if (response.status < 200 || response.status >= 300) {
      console.error("Error: Non-2xx response status", response.status)
      throw new Error(`Error: status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}



export async function deleteArticle(articledelete) {
  try {
    const response = await axios.delete("https://sprint-mission-api.vercel.app/articles");
    if (response.status < 200 || response.status >= 300) {
      console.error("Error: Non-2xx response status", response.status)
      throw new Error(`Error: status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}