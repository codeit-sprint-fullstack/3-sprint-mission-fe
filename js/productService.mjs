import { typeConfirm } from "./lib.mjs";

/** Get Products */
const getProductsBody = { page: 1, pageSize: 1, keyword: "string" };
export async function getProducts(body = getProductsBody) {
  const typeCheck = typeConfirm(getArticleBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const url = `${products}?page=${body.page}&pageSize=${body.pageSize}&keyword=${body.keyword}`;
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Get Products Error", error);
  }
}

/** Create Products */
const createProductsBody = {
  name: "string",
  description: "string",
  price: 0,
  manufacturer: "string",
  tags: ["string"],
  images: ["string"],
};
export async function createProducts(body = createProductsBody) {
  const typeCheck = typeConfirm(getArticleBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const response = await instance.post(products, body);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Create Products Error", error);
  }
}

// const status = await createProdcuts({
//   name: "테스트 상품입니다.2222",
//   description: "test_설명",
//   price: 10000,
//   manufacturer: "이게뭔데",
//   tags: ["잡동사니", "쓸모없는"],
//   images:["없음"]
// });
// console.log(status);
