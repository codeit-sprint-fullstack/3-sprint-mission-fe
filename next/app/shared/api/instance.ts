import axios from 'axios';
const instance = axios.create({
  // baseURL: "https://panda-market-api.vercel.app/",
  baseURL: 'http://localhost:8000/',
  withCredentials: true,
});

instance.interceptors.request.use(
  (config): any => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err): any => {
    console.log('interceptor', err);
    return Promise.reject(err);
  },
);
export default instance;
