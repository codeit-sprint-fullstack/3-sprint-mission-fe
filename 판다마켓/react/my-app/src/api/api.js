import axios from "axios";

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
