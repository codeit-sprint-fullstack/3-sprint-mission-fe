import axios from "axios";
import URLS from "../constants/url";
import { HTTP_ERROR_MESSAGE } from "../constants/messages";

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

export const getData = async (url) => {
  return api
    .get(url)
    .then((response) => response.data)
    .catch((e) => console.log(e.message));
};

export default api;
