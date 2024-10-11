import URLS from "../constants/url.js";
import { getData } from "./common.js";

export const getProductList = async (page = 1, pageSize = 100, keyword = "") => {
  const URL = `${URLS.products}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const data = getData(URL);
  return data;
};
