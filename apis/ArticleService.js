import { API, ARTICLES, getArticleListParams, ARTICLE } from './constants.js';

export const getArticleList = async () => {
  console.log(`게시물 목록 조회`);
  const response = await API.get(ARTICLES, {
    params: getArticleListParams(),
  });
  console.log(response);
};
export const getArticle = async (id) => {
  console.log(`게시물 조회`);
  const response = await API.get(ARTICLE(id));
  console.log(response);
};
export const createArticle = async (article) => {
  console.log(`게시물 생성`);
  const response = await API.post(ARTICLES, article);
  console.log(response);
};
export const patchArticle = async (id, article) => {
  console.log(`게시물 수정`);
  const response = await API.patch(ARTICLE(id), article);
  console.log(response);
};
export const deleteArticle = async (id) => {
  console.log(`게시물 삭제`);
  const response = await API.delete(ARTICLE(id));
  console.log(response);
};
