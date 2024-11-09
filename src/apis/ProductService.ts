import URLS from "../constants/url";
import { ICreateProductParams, ISearchProductsParams } from "../types/parameter";
import api from "./axiosInstance";

export const getProductList = async (params: Partial<ISearchProductsParams> = {}) => {
  const { data } = await api.get(URLS.products, { params });
  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await api.get(`${URLS.products}/${id}`);
  return data;
};

export const createProduct = async (body: ICreateProductParams) => {
  const { data } = await api.post(URLS.products, body);
  return data;
};

export const patchProduct = async (id: string, body: Partial<ICreateProductParams>) => {
  const { data } = await api.patch(`${URLS.products}/${id}`, body);
  return data;
};

export const deleteProduct = async (id: string) => {
  await api.delete(`${URLS.products}/${id}`);
};

export const setFavoriteProduct = async (id: string) => {
  const { data } = await api.post(`${URLS.products}/${id}/favorite`);
  return data;
};

export const unsetFavoriteProduct = async (id: string) => {
  await api.delete(`${URLS.products}/${id}/favorite`);
};
