import { BASE_URL, fetchReq } from '../fetch.js';

const path = new URL('/articles', BASE_URL);

/**
 * 게시글 등록
 * @typedef { Object } Article
 * @property { number | undefined } id - 게시글 ID
 * @property { string } title - 제목
 * @property { string } content - 내용
 * @property { string } image - 이미지 URL
 */

/**
 * @typedef { Object } QueryObj
 * @property { number | undefined } page
 * @property { number | undefined } pageSize
 * @property { string | undefined } keyword
 */
/**
 * 게시글 목록 조회
 * @param { QueryObj } queryObj
 * @returns { Promise<Response> }
 */
const getArticleList = (queryObj) => {
  const queryParams = new URLSearchParams(queryObj);
  return fetchReq('GET', `${path}?${queryParams}`);
};

/**
 * 게시글 등록
 * @param {Article} payload
 * @returns {Promise<Response>}
 */
const createArticle = async (payload) => {
  return fetchReq('POST', path, payload);
};

/**
 * 게시글 상세 조회
 * @param {number} id
 * @returns {Promise<Response>}
 */
const getArticle = async (id) => {
  return fetchReq('GET', `${path}/${id}`);
};


/**
* 게시글 수정
* @param {number} id
* @param {Article} payload
* @returns {Promise<Response>}
*/
const patchArticle = async (id, payload) => {
  return fetchReq('PATCH', `${path}/${id}`, payload);
};

/**
 * 게시글 삭제
 * @param {number} id
 * @returns {Promise<Response>}
*/
const deleteArticle = async (id) => {
  return fetchReq('DELETE', `${path}/${id}`);
};

export { getArticleList, getArticle, createArticle, patchArticle, deleteArticle };
