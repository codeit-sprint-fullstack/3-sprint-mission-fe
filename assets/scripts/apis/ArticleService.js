import api from "./common.js";
import URLS from "../constants/url.js";

const getData = async (url) => {
  return api
    .get(url)
    .then((response) => response.data)
    .catch((e) => console.log(e.message));
};

export const getArticleList = (page = 1, pageSize = 100, keyword = "") => {
  const URL = `${URLS.articles}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const data = getData(URL);
  return data;
};

export const getArticle = (id) => {
  const URL = `${URLS.articles}/${id}`;
  const data = getData(URL);
  return data;
};

export const createArticle = (body) => {
  const data = api
    .post(URLS.articles, body)
    .then((response) => response.data)
    .catch((e) => console.log(e.message));
  return data;
};

export const patchArticle = async (id, body) => {
  const data = api
    .patch(`${URLS.articles}/${id}`, body)
    .then((response) => response.data)
    .catch((e) => console.log(e.message));
  return data;
};

export const deleteArticle = async (id) => {
  const data = await api
    .delete(`${URLS.articles}/${id}`)
    .then((response) => response.data)
    .catch((e) => console.log(e.message));
  return data;
};
