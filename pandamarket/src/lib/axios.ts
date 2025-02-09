import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // 백엔드 API URL
  withCredentials: true, // 쿠키 및 인증 정보 포함
});

export default axiosInstance;
