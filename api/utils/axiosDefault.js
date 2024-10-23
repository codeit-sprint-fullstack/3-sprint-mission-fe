// import { axios } from 'axios'; -> 웹브라우저에서는 사용할 수 없다. node.js에서만 사용할 수 있다. + 헤더에 CDN으로 추가해서 해결
import { handler } from './handler.js';

export const AxiosDefault = (baseURL) => {
  const axiosInstance = createAxiosInstance(baseURL);
  requestInterceptor(axiosInstance);
  responseInterceptor(axiosInstance);
  return axiosInstance;
};

const createAxiosInstance = (baseURL) => {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return axiosInstance;
};

// 어떨때 에러를 발생할까?
const requestInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

const responseInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      handler(error); // 백엔드에게 에러 코드 보내기
      return Promise.reject(error);
    }
  );
};
