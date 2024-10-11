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

/**
 * @typedef {Object} schema
 * @property {string} name - API 이름
 * @property {string} method - HTTP 메소드
 * @property {string} desc - API 설명
 * @property {Object} header - API 헤더
 * @property {Object} params - API 파라미터
 *
 */
const schema = [
  {
    name: 'getArticleList',
    method: 'GET',
    header: null,
    desc: '게시글 목록 조회',
    params: {
      query: [
        { name: 'page', type: 'number', desc: '페이지 번호' },
        { name: 'pageSize', type: 'number', desc: '페이지 크기' },
        { name: 'keyword', type: 'string', desc: '검색 키워드' },
      ],
      path: null,
      body: null,
    },
  },
  {
    name: 'getArticle',
    method: 'GET',
    header: null,
    desc: '게시글 상세 조회',
    params: {
      query: null,
      path: [{ name: 'id', type: 'number', desc: '게시글 ID', required: true }],
      body: null,
    },
  },
  {
    name: 'createArticle',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    desc: '게시글 등록',
    params: {
      query: null,
      path: null,
      body: [
        { name: 'title', type: 'string', desc: '제목', required: true },
        { name: 'content', type: 'string', desc: '내용', required: true },
        { name: 'image', type: 'string', desc: '이미지 URL', required: true },
      ],
    },
  },
  {
    name: 'patchArticle',
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    desc: '게시글 수정',
    params: {
      query: null,
      path: [{ name: 'id', type: 'number', desc: '게시글 ID', required: true }],
      body: [
        { name: 'title', type: 'string', desc: '제목' },
        { name: 'content', type: 'string', desc: '내용' },
        { bane: 'image', type: 'string', desc: '이미지 URL' },
      ],
    },
  },
  {
    name: 'deleteArticle',
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    desc: '게시글 삭제',
    params: {
      query: null,
      path: [{ name: 'id', type: 'number', desc: '게시글 ID', required: true }],
      body: null,
    },
  },
];

export { getArticleList, getArticle, createArticle, patchArticle, deleteArticle, schema };
