import axios from "axios";

const instance = axios.create({
  baseURL: " https://panda-market-api.vercel.app", //코드잇 db
  // withCredentials: true,
});

export default instance;
