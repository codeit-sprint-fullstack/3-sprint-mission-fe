import { typeConfirm } from "./lib.mjs";
const { products } = {
  products: "/products",
};
/** instance */
export const instanceObject = {
  baseURL: "https://sprint-mission-api.vercel.app",
  headers: {
    Authorization: "I can't speak korean",
  },
};

// async function fetchs() {
//   const response = await fetch("https://sprint-mission-api.vercel.app/products/199", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   console.log(response)
// }
// console.log(await fetchs());
// 토큰 및 그런 코드 많이봄
const instance = axios.create(instanceObject);
instance.interceptors.request.use(
  (config) => {
    console.log("request config", config);
    return config;
  },
  (error) => {
    console.error("request error", error);
  }
);

//상태코드를 많이봄
instance.interceptors.response.use(
  (response) => {
    response.statusText = "성공";
    console.log("reponse", response);
    return response;
  },
  (error) => {
    console.error("response error", error);
    return Promise.reject(error);
  }
);

/** Get */
export const getProductsBody = { page: 1, pageSize: 1, keyword: "string" };
export async function getProducts(body = getProductsBody) {
  const typeCheck = typeConfirm(getProductsBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const url = `${products}?page=${body.page}&pageSize=${body.pageSize}&keyword=${body.keyword}`;
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Get Products Error", error);
  }
}

/** Create */
export const createProductsBody = {
  name: "string",
  description: "string",
  price: 0,
  manufacturer: "string",
  tags: ["string"],
  images: ["string"],
};
export async function createProducts(body = createProductsBody) {
  const typeCheck = typeConfirm(createProductsBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const response = await instance.post(products, body);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Create Products Error", error);
  }
}
console.log(await createProducts(createProductsBody))

/** Patch */
export const patchProductsBody = {
  id: 0,
  ...createProductsBody,
};
export async function patchProducts(body = patchProductsBody) {
  const typeCheck = typeConfirm(patchProductsBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const id = body.id;
    delete body.id;
    const response = await instance.patch(`${products}/${id}`, body);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Patch Products Error", error);
  }
}

/** Delete */
export const deleteProductsBody = {
  id: 0,
};
export async function deleteProducts(body = deleteProductsBody) {
  const typeCheck = typeConfirm(deleteProductsBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const response = await instance.delete(`${products}/${body.id}`);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Delete Products Error", error);
  }
}
