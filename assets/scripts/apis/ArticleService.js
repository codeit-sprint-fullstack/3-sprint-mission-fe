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
      console.log(
        HTTP_ERROR_MESSAGE[error.response.status] ??
          `${HTTP_ERROR_MESSAGE.else} : ${error.response.status}`
      );
    } else if (error.request) {
      console.log(HTTP_ERROR_MESSAGE.requestError);
    }
    return Promise.reject(error);
  }
);

export const getArticleList = async (page = 1, pageSize = 100, keyword = "") => {
  const URL = `${URLS.articles}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const { data } = await api.get(URL);
  return data;
};

export const getArticle = async (id = 0) => {
  const URL = `${URLS.articles}/${id}`;
  const { data } = await api.get(URL);
  return data;
};
