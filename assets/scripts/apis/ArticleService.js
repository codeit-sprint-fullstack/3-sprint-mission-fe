import api from "./axiosInstance.js";
import URLS from "../constants/url.js";

/**
 * @param {object} body 글 조회에 필요한 정보를 담은 객체
 * @param {number} body.page 조회할 페이지번호
 * @param {number} body.pageSize 조회했을 때 가져올 응답값의 개수
 * @param {string} body.keyword 글 조회에 사용할 키워드
 * @returns {Promise<response>} 비동기로 인한 Promise로 articleList를 리턴
 * @throws {Error} API 요청 실패 시 에러
 */
export const getArticleList = async (body = {}) => {
  return api.get(URLS.articles, { body }).then((response) => response.data);
};

export const getArticle = async (id) => {
  const URL = `${URLS.articles}/${id}`;
  return api.get(URL).then((response) => response.data);
};

/**
 * @param {Object} body - 글 생성에 필요한 정보를 담은 객체
 * @param {string} body.title - 글의 제목
 * @param {string} body.content - 글의 내용
 * @param {string} body.image - 글에 첨부할 이미지의 URL
 * @returns {Promise<Object>} 비동기로 인한 Promise로 생성한 글을 리턴
 * @throws {Error} API 요청 실패 시 에러
 */
export const createArticle = async (body) => {
  return api.post(URLS.articles, body).then((response) => response.data);
};

/**
 *@param {number} id - 수정하려는 글의 id
 * @param {Object} body - 글 수정에 필요한 정보를 담은 객체
 * @param {string} body.title - 수정할 제목
 * @param {string} body.content - 수정할 내용
 * @param {string} body.image - 수정할 이미지의 URL
 * @returns {Promise<Object>} 비동기로 인한 Promise로 수정한 글을 리턴
 * @throws {Error} API 요청 실패 시 에러
 */
export const patchArticle = async (id, body) => {
  return api.patch(`${URLS.articles}/${id}`, body).then((response) => response.data);
};

export const deleteArticle = async (id) => {
  api.delete(`${URLS.articles}/${id}`);
};
