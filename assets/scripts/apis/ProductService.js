import URLS from "../constants/url.js";
import api from "./common.js";

export const getProductList = async (page = 1, pageSize = 100, keyword = "") => {
  const URL = `${URLS.products}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const { data } = await api.get(URL);
  return data;
};

export const getProduct = async (id) => {
  const { data } = await api.get(`${URLS.products}/${id}`);
  return data;
};

export const createProduct = async (body) => {
  const { data } = await api.post(URLS.products, body);
  return data;
};

export const patchProduct = async (id, body) => {
  const { data } = await api.patch(`${URLS.products}/${id}`, body);
  return data;
};

export const deleteProduct = async (id) => {
  await api.delete(`${URLS.products}/${id}`);
};
