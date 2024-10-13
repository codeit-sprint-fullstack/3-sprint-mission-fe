import {
  API,
  ARTICLES,
  ARTICLE,
  getArticleListParams,
  articleParams,
} from "./constants.js";

export const getArticleList = async (page, pageSize, keyword) => {
  console.log(`게시물 목록 조회`);
  const response = await API.get(ARTICLES, {
    params: getArticleListParams(page, pageSize, keyword),
  });
  console.log(response);
};
export const getArticle = async (id) => {
  console.log(`게시물 조회`);
  const response = await API.get(ARTICLE(id));
  console.log(response);
};

export const createArticle = async ({ title, content, image }) => {
  console.log(`게시물 생성`);
  const response = await API.post(
    ARTICLES,
    articleParams(title, content, image)
  );
  console.log(response);
};
export const patchArticle = async (id, { title, content, image }) => {
  console.log(`게시물 수정`);
  const response = await API.patch(
    ARTICLE(id),
    articleParams(title, content, image)
  );
  console.log(response);
};
export const deleteArticle = async (id) => {
  console.log(`게시물 삭제`);
  const response = await API.delete(ARTICLE(id));
  console.log(response);
};
