import URLS from "../constants/url.js";
import api from "./axiosInstance.js";

/**
 * @param {object} body 상품목록 조회에 필요한 정보를 담은 객체
 * @param {number} page 조회할 페이지번호
 * @param {number} pageSize 조회했을 때 가져올 응답값의 개수
 * @param {favorite | recent} orderBy 조회할 때 정렬 기준
 * @param {string} keyword 상품 조회에 사용할 키워드
 * @returns {Promise<response>} 비동기로 인한 Promise로 productList를 리턴
 * @throws {Error} API 요청 실패 시 에러
 */
export const getProductList = async (params = {}) => {
  const { data } = await api.get(URLS.products, { params });
  return data;
};

export const getProduct = async (id) => {
  const { data } = await api.get(`${URLS.products}/${id}`);
  return data;
};

/**
 * @param {Object} body - 상품 생성에 필요한 정보를 담은 객체
 * @param {string} body.name - 상품의 이름
 * @param {string} body.description - 상품에 대한 설명
 * @param {number} body.price - 상품의 가격
 * @param {string[]} body.tags - 상품의 태그가 담긴 배열
 * @param {string[]} body.images - 상품의 이미지 경로가 담긴 배열
 * @returns {Promise<Object>} 비동기로 인한 Promise로 생성한 상품을 리턴
 * @throws {Error} API 요청 실패 시 에러
 */
export const createProduct = async (body) => {
  const { data } = await api.post(URLS.products, body);
  return data;
};

/**
 * @param {number} id - 수정할 상품의 id
 * @param {Object} body - 상품 수정에 필요한 정보를 담은 객체
 * @param {string} body.name - 수정할 이름
 * @param {string} body.description - 수정할 설명
 * @param {number} body.price - 수정할 가격
 * @param {string[]} body.tags - 수정할 태그가 담긴 배열
 * @param {string[]} body.images - 수정할 이미지 경로가 담긴 배열
 * @returns {Promise<Object>} 비동기로 인한 Promise로 수정한 상품을 리턴
 * @throws {Error} API 요청 실패 시 에러
 */
export const patchProduct = async (id, body) => {
  const { data } = await api.patch(`${URLS.products}/${id}`, body);
  return data;
};

export const deleteProduct = async (id) => {
  await api.delete(`${URLS.products}/${id}`);
};

export const setFavoriteProduct = async (id) => {
  const { data } = await api.post(`${URLS.products}/${id}/favorite`);
  return data;
};

export const unsetFavoriteProduct = async (id) => {
  await api.delete(`${URLS.products}/${id}/favorite`);
};
