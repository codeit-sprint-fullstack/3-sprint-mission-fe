import { API, PRODUCTS, PRODUCT } from './constants.js';

export const getProductList = async () => {
  console.log(`상품 목록 조회`);
  const response = await API.get(PRODUCTS);
  console.log(response);
};
export const getProduct = async (id) => {
  console.log(`상품 조회`);
  const response = await API.get(PRODUCT(id));
  console.log(response);
};
export const createProduct = async (product) => {
  console.log(`상품 생성`);
  const response = await API.post(PRODUCTS, product);
  console.log(response);
};
export const patchProduct = async (id, product) => {
  console.log(`상품 수정`);
  const response = await API.patch(PRODUCT(id), product);
  console.log(response);
};
export const deleteProduct = async (id) => {
  console.log(`상품 삭제`);
  const response = await API.delete(PRODUCT(id));
  console.log(response);
};
