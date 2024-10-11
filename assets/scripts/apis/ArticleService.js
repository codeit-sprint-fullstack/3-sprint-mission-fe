import URLS from "../constants/url.js";
import axios from "axios";
import { HTTP_ERROR_MESSAGE } from "../constants/messages.js";

const api = axios.create({
  baseURL: URLS.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      throw new Error(
        HTTP_ERROR_MESSAGE[error.response.status] ??
          `${HTTP_ERROR_MESSAGE.else} : ${error.response.status}`
      );
    }
    if (error.request) {
      throw new Error(HTTP_ERROR_MESSAGE.requestError);
    }
    throw new Error(HTTP_ERROR_MESSAGE.else);
  }
);

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

export const getArticle = (id = 0) => {
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
