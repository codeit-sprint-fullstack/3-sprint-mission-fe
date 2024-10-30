import axios from "axios";
const instance = await axios.create({
  // baseURL: "https://panda-market-api.vercel.app/",
  baseURL: "http://localhost:8000/",
});
export default instance;
