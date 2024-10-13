import { BASE_URL, get, fetchReq } from '../fetch.js';

const path = new URL('/articles', BASE_URL);

/**
 * 게시글 등록
 * @typedef {Object} Article
 * @property {string} title - 제목
 * @property {string} content - 내용
 * @property {string} image - 이미지 URL
 * /

/**
 * 게시글 목록 조회
 * @param {number|?} page
 * @param {number|?} pageSize
 * @param {string|?} keyword
 * @returns {Promise<Response>}
 */
const getArticleList = async (page = 1, pageSize = 100, keyword = '') => {
  const query = new URLSearchParams({ page, pageSize, keyword });
  return await get(`${path}?${query.toString()}`);
};

/**
 * 게시글 등록
 * @param {Article} payload
 * @returns {Promise<Response>}
 */
const createArticle = async (payload) => {
  return await fetchReq('POST', path, payload);
};

/**
 * 게시글 상세 조회
 * @param {number} id
 * @returns {Promise<Response>}
 */
const getArticle = async (id) => {
  return await get(`${path}/${id}`);
};

// 게시글 수정
const patchArticle = async (id, payload) => {
  return await fetchReq('PATCH', `${path}/${id}`, payload);
};

// 게시글 삭제
const deleteArticle = async (id) => {
  return await fetchReq('DELETE', `${path}/${id}`);
};

export { getArticleList, getArticle, createArticle, patchArticle, deleteArticle };
