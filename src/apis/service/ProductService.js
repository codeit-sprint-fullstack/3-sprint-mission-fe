import { BASE_URL, get, fetchReq } from '../fetch.js';

const path = new URL('/products', BASE_URL);

/**
 * @typedef {Object} Product
 * @property {string} name - 상품명
 * @property {string} description - 설명
 * @property {number} price - 가격
 * @property {string} manufacturer -제조사
 * @property {Array<string>} tags - 태그
 * @property {Array<string>} imageUrl - 이미지 URL 목록
 */

/**
 * 상품 목록 조회
 * @param {number|?} page
 * @param {number|?} pageSize
 * @param {string|?} keyword
 * @returns {Promise<Response>}
 */
const getProductList = async (page = 1, pageSize = 100, keyword = '') => {
  const query = new URLSearchParams({ page, pageSize, keyword });
  return await get(`${path}?${query.toString()}`);
};

/**
 * 상품 등록
 * @param {Product} payload
 * @returns {Promise<Response>}
 */
const createProduct = async (payload) => {
  return await fetchReq('POST', path, payload);
};

/**
 * 상품 상세 조회
 * @param {number} id
 * @returns {Promise<Response>}
 */
const getProduct = async (id) => {
  return await get(`${path}/${id}`);
};

/**
 * 상품 수정
 * @param {number} id
 * @param {Product} payload
 * @returns {Promise<Response>}
 */
const patchProduct = async (id, payload) => {
  return await fetchReq('PATCH', `${path}/${id}`, payload);
};

/**
 * 상품 삭제
 * @param {number} id
 * @returns {Promise<Response>}
 */
const deleteProduct = async (id) => {
  return await fetchReq('DELETE', `${path}/${id}`);
};

export { getProductList, createProduct, getProduct, patchProduct, deleteProduct };
