import URLS from "../constants/url";
import { getData } from "./common";

export const getProductList = async (page = 1, pageSize = 100, keyword = "") => {
  const URL = `${URLS.products}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  const data = getData(URL);
  return data;
};
