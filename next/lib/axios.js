import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://panda-market-api.vercel.app", // 백엔드 API URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 쿠키 및 인증 정보 포함
});

export default axiosInstance;
