import axios from 'axios';

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
      handler(error);
      return Promise.reject(error);
    }
  );
};
