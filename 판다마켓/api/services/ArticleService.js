import { responseInterceptor, handleError } from "../common/common.js";
import { apiUrl } from "../common/constant.js";

/**
 * 게시글 목록 조회
 * 
 * @param page 페이지
 * @param pageSize 페이지당 몇개 올 지
 * @param keyword 키워드
 */
function getArticleList(page, pageSize, keyword){
    return fetch(`${apiUrl}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
    .then((response) => responseInterceptor(response))
    .catch((error) => handleError(error))
}

async function getArticle(id){

    return fetch(`https://sprint-mission-api.vercel.app/articles/${id}`, {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
        }
    })
    .then((response) => responseInterceptor(response))
    .catch((error) => handleError(error))
  
//    .then(function(response){
//     return responseInterceptor(response)
//    })


}

/**
 * 게시글생성
 * 
 * @param title 제목
 * @param content 내용
 * @param img 이미지 링크
 */
function createArticle(title, content, img) {

    if (!title || !content || !img) return false;
    const requestBody = {
        title : title,
        content : content,
        image : img
    }
    return fetch('https://sprint-mission-api.vercel.app/articles', {
        method : 'POST',
        body : JSON.stringify(requestBody),
        headers : {
            'Content-Type' : 'application/json',
        }
    })
    .then((response) => responseInterceptor(response))
    .catch((error) => handleError(error))
}

function patchArticle(id, title, content, img) {
    const requestBody = {
        title : title,
        content : content,
        image : img
    }

    return fetch(`https://sprint-mission-api.vercel.app/articles/${id}`, {
        method : 'PATCH',
        body : JSON.stringify(requestBody),
        headers : {
            'Content-Type' : 'application/json',
        }
    })
    .then((response) => responseInterceptor(response))
    .catch((error) => handleError(error))
    
}

function deleteArticle(id) {
    return fetch(`https://sprint-mission-api.vercel.app/articles/${id}`, {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
        },
    })
    .then((response) => responseInterceptor(response))
    .catch((error) => handleError(error))
}

export const ArticleService = {
    getArticleList,
    getArticle,
    createArticle,
    patchArticle,
    deleteArticle
}

