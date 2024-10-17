import axios from "axios";
import URLS from "../constants/url.js";
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

export default api;
