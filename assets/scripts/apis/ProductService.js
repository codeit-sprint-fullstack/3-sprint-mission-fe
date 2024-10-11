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
