import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url === 'auth/refresh-token') {
      return;
    }
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axiosInstance.post(
          'auth/refresh-token',
          {},
          {
            withCredentials: true,
          },
        );
        return axiosInstance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.error('리소스를 찾을 수 없습니다');
          break;
        case 500:
          console.error('서버 에러');
          break;
        default:
          console.error('API 요청 중 에러 발생:', error);
      }
    } else if (error.request) {
      console.error('네트워크 에러');
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
