import URLS from "../constants/url.js";
import api from "./common.js";

const handleResponse = async (apiMethod) => {
  try {
    const { data } = await apiMethod();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getProductList = async (page = 1, pageSize = 100, keyword = "") => {
  const URL = `${URLS.products}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const data = await handleResponse(() => api.get(URL));
  return data;
};

export const getProduct = async (id) => {
  const data = await handleResponse(() => api.get(`${URLS.products}/${id}`));
  return data;
};

export const createProduct = async (body) => {
  const data = await handleResponse(() => api.post(URLS.products, body));
  return data;
};

export const patchProduct = async (id, body) => {
  const data = await handleResponse(() => api.patch(`${URLS.products}/${id}`, body));
  return data;
};

export const deleteProduct = async (id) => {
  await handleResponse(() => api.delete(`${URLS.products}/${id}`));
};
