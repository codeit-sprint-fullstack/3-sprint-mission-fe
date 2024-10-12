import URLS from "../constants/url.js";
import api from "./common.js";

const getData = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getProductList = async (page = 1, pageSize = 100, keyword = "") => {
  const URL = `${URLS.products}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const data = getData(URL);
  return data;
};

export const getProduct = async (id) => {
  const data = getData(`${URLS.products}/${id}`);
  return data;
};

export const createProduct = async (body) => {
  try {
    const response = await api.post(URLS.products, body);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const patchProduct = async (id, body) => {
  try {
    const response = await api.patch(`${URLS.products}/${id}`, body);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    await api.delete(`${URLS.products}/${id}`);
  } catch (e) {
    console.log(e.message);
  }
};
