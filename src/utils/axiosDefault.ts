import axios, { AxiosInstance } from 'axios';
import { handler } from './handler.ts';

export const AxiosDefault = (baseURL: string) => {
  const axiosInstance = createAxiosInstance(baseURL);
  requestInterceptor(axiosInstance);
  responseInterceptor(axiosInstance);
  return axiosInstance;
};

const createAxiosInstance = (baseURL: string) => {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return axiosInstance;
};

// 어떨때 에러를 발생할까?
const requestInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

const responseInterceptor = (axiosInstance: AxiosInstance) => {
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
