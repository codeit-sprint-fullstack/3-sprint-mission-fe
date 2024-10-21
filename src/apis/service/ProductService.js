import { BASE_URL, fetchReq } from '../fetch.js';

const path = new URL('/products', BASE_URL);

/**
 * @typedef {Object} Product
 * @property {string} name - 상품명
 * @property {string} description - 설명
 * @property {number} price - 가격
 * @property {string} manufacturer -제조사
 * @property {Array<string>} tags - 태그
 * @property {Array<string>} imageUrls - 이미지 URL 목록
 */

/**
 * @typedef { Object } QueryObj
 * @property { number | undefined } page
 * @property { number | undefined } pageSize
 * @property { string | undefined } keyword
 */
/**
 * 상품 목록 조회
 * @param { QueryObj } queryObj
 */
const getProductList = (queryObj) => {
  const queryParams = new URLSearchParams(queryObj);
  return fetchReq('GET', `${path}?${queryParams}`);
};

/**
 * 상품 등록
 * @param {Product} payload
 * @returns {Promise<Response>}
 */
const createProduct = (payload) => {
  return fetchReq('POST', path, payload);
};

/**
 * 상품 상세 조회
 * @param {number} id
 * @returns {Promise<Response>}
 */
const getProduct = (id) => {
  return fetchReq('GET', `${path}/${id}`);
};

/**
 * 상품 수정
 * @param {number} id
 * @param {Product} payload
 * @returns {Promise<Response>}
 */
const patchProduct = (id, payload) => {
  return fetchReq('PATCH', `${path}/${id}`, payload);
};

/**
 * 상품 삭제
 * @param {number} id
 * @returns {Promise<Response>}
 */
const deleteProduct = (id) => {
  return fetchReq('DELETE', `${path}/${id}`);
};

export { getProductList, createProduct, getProduct, patchProduct, deleteProduct };
