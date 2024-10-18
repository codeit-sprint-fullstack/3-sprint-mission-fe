import axios from "axios";
const instance = await axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
});
export default instance;
