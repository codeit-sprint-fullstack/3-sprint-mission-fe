import {
  API,
  PRODUCTS,
  PRODUCT,
  getProductListParams,
  productParams,
} from "./constants.js";

export const getProductList = async (page, pageSize, keyword) => {
  console.log(`상품 목록 조회`);
  const response = await API.get(PRODUCTS, {
    params: getProductListParams(page, pageSize, keyword),
  });
  console.log(response);
};
export const getProduct = async (id) => {
  console.log(`상품 조회`);
  const response = await API.get(PRODUCT(id));
  console.log(response);
};
export const createProduct = async ({
  name,
  description,
  price,
  tags,
  images,
}) => {
  console.log(`상품 생성`);
  const response = await API.post(
    PRODUCTS,
    productParams(name, description, price, tags, images)
  );
  console.log(response);
};
export const patchProduct = async (
  id,
  { name, description, price, tags, images }
) => {
  console.log(`상품 수정`);
  const response = await API.patch(
    PRODUCT(id),
    productParams(name, description, price, tags, images)
  );
  console.log(response);
};
export const deleteProduct = async (id) => {
  console.log(`상품 삭제`);
  const response = await API.delete(PRODUCT(id));
  console.log(response);
};
