import axios from 'axios';

async function getArticleList(page, pageSize, keyword) {
  try {
    const response = await axios.get("https://sprint-mission-api.vercel.app/articles", {
      params: {
        page: page,
        pageSize: pageSize,
        keyword: keyword
      } 
    });
    return ReportingObserver.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}
  
// const getArticle = fetch("https://sprint-mission-api.vercel.app/articles") // get
async function getArticle(articleId) {
  try {
    const response = await axios.get("https://sprint-mission-api.vercel.app/articles");
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}


// const createArticle = fetch("https://sprint-mission-api.vercel.app/articles") // POST
async function createArticleList(page, pageSize, keyword) {
  try {
    const response = await axios.get("https://sprint-mission-api.vercel.app/articles", {
      params: {
        page: page,
        pageSize: pageSize,
        keyword: keyowrd
      } 
    });
    return ReportingObserver.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}



// const PatchArticle = fetch("https://sprint-mission-api.vercel.app/articles") // PATCH
async function PatchArticle(articlepatch) {
  try {
    const response = await axios.patch("https://sprint-mission-api.vercel.app/articles");
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}


// const deleteArticle = fetch("https://sprint-mission-api.vercel.app/articles") // DELETE
async function deleteArticle(articledelete) {
  try {
    const response = await axios.delete("https://sprint-mission-api.vercel.app/articles");
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}