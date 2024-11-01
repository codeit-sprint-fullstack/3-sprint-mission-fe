import axios from "axios";
const instance = await axios.create({
  // baseURL: "https://panda-market-api.vercel.app/",
  // baseURL: "http://localhost:8000/",
  baseURL: "https://three-sprint-mission-fe-1.onrender.com",
});
export default instance;
