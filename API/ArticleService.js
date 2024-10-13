//응답의 상태코드가 2xx가 아닐경우, 에러메시지를 콘솔에 출력
//.then 메소드 사용
//

import axios from 'axios';

async function getProductList(page, pageSize, keyword) {
  try {
    const response = await axios.get("https://sprint-mission-api.vercel.app/products", {
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
  
// const getProduct = fetch("https://sprint-mission-api.vercel.app/products") // get
async function getProduct(articleId) {
  try {
    const response = await axios.get("https://sprint-mission-api.vercel.app/articles");
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw errow;
  }
}


// const createProductList = fetch("https://sprint-mission-api.vercel.app/products") // POST
async function createProduct(name, description, price, tags, images) {
  try {
    const response = await axios.post("https://sprint-mission-api.vercel.app/products", {
      params: {
        "name": name,
        "description": description,
        "price": price,
        "tags": "tags",
        "images": images
      } 
    });
    return ReportingObserver.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw error;
  }
}



// const PatchProduct = fetch("https://sprint-mission-api.vercel.app/products") // PATCH
async function PatchProduct(articlepatch) {
  try {
    const response = await axios.patch("https://sprint-mission-api.vercel.app/products");
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw errow;
  }
}


// const deleteProduct = fetch("https://sprint-mission-api.vercel.app/articles") // DELETE
async function deleteProduct(articledelete) {
  try {
    const response = await axios.delete("https://sprint-mission-api.vercel.app/products");
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    throw errow;
  }
}