import axios, { AxiosError } from "axios";
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
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.status
          ? HTTP_ERROR_MESSAGE[error.response.status.toString()] ||
            `${HTTP_ERROR_MESSAGE.else} : ${error.response.status}`
          : HTTP_ERROR_MESSAGE.else
      );
    }
    if (error.request) {
      throw new Error(HTTP_ERROR_MESSAGE.requestError);
    }
    throw new Error(HTTP_ERROR_MESSAGE.else);
  }
);

export default api;
