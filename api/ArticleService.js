import axios from 'axios';
import { get, post, put, del, patch } from './axiosClient';

// basic url 설정하기
// axios.get을 추상화해서 get()으로 사용하기
// interceptor를 사용해서 에러처리하기

// Q. 각 메서드별로 폴더 구조를 만들어야 할까?

const getArticleList = async (page = 1, pageSize = 100, keyword) => {
  if (keyword === undefined) alert('keyword is required');
  return get(`/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
};

const getArticle = async (id) => {
  return get(`/articles/${id}`);
};

const createArticle = async ({ title, content, image }) => {
  const data = { title, content, image };
  return post('/articles', data);
};

const patchArticle = async (id, { title, content, image }) => {
  const data = { title, content, image };
  return patch(`/articles/${id}`, data);
};

const deleteArticle = async (id) => {
  return del(`/articles/${id}`);
};

export {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};
