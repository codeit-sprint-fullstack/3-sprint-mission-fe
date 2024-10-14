import api from "./common.js";
import URLS from "../constants/url.js";

const handleResponse = (apiMethod) => {
  return apiMethod.then((response) => response.data);
};

export const getArticleList = (page = 1, pageSize = 100, keyword = "") => {
  const URL = `${URLS.articles}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const data = handleResponse(api.get(URL));
  return data;
};

export const getArticle = (id) => {
  const URL = `${URLS.articles}/${id}`;
  const data = handleResponse(api.get(URL));
  return data;
};

export const createArticle = (body) => {
  const data = handleResponse(api.post(URLS.articles, body));
  return data;
};

export const patchArticle = (id, body) => {
  const data = handleResponse(api.patch(`${URLS.articles}/${id}`, body));
  return data;
};

export const deleteArticle = (id) => {
  api.delete(`${URLS.articles}/${id}`);
};
