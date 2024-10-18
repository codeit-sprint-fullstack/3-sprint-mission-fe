import axios from "axios";
const instance = await axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
});
const url = "/products";
export async function productsGet(page = 1, pageSize = 10, orderBy = "recet") {
  try {
    const path = `${url}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    const response = await instance.get(path);
    // console.log(await response.data);
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}
