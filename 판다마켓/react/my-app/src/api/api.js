import axios from "axios";

//try {} catch(err) {console.error(err);}

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

export async function PostReApi(title, content) {
  try {
    const response = await axios.post(baseUrl + "/api/postregistration", {
      title,
      content,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function ListAllApi() {
  try {
    const response = await axios.get(baseUrl + "/api/articleList");
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function searchApi(title) {
  try {
    const response = await axios.post(baseUrl + "/api/postget", {
      title,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
