import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000", // 내 db
});

export default instance;
