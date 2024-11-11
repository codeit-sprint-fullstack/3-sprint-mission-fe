import axios from "axios";

const baseUrl = "http://localhost:8000";

const axiosInstance = axios.create({
  baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
//지금 다 오류
export async function getProductsApi(params) {
  const response = await axios.get(
    "https://panda-market-api.vercel.app/products?pageSize=4&orderBy=favorite"
  );
  return response.data;
}

export async function getItemApi(page, pageSize, orderBy, keyword) {
  let query = `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  if (keyword) query += `&keyword=${keyword}`;
  const response = await axios.get(query);
  return response.data;
}

export async function postProductsApi({ id, name, description, price, tags }) {
  try {
    let response = await axiosInstance.post("/db/tasks", {
      id,
      name,
      description,
      price,
      tags,
    });
    return response.data;
  } catch (err) {
    console.log("postProductsApi catch", err);
    throw err;
  }
}
