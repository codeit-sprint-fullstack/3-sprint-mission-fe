import axios from "axios";
import { baseURL } from "./common.mjs";

const instance = axios.create(baseURL);

// order, page, pageSize, keyword
export async function getProductList(
  page = 1,
  pageSize = 10,
  keyword = "",
  order = "id"
) {
  console.log("상품 목록 조회");
  const res = await instance
    .get("/products", {
      params: { page, pageSize, keyword, order },
    })
    .then((res) => {
      if (keyword !== null) {
        const list = res.data.filter((info) => {
          return info.title === keyword;
        });
        return list;
      } else return res.data;
    })
    .catch((error) => console.log(error));
  //.finally(() => console.log("finally"));
}

export async function getProduct(id) {
  console.log("상품 상세 조회");
  const res = await instance.get(`/products/${id}`);
  return res.data;
}

export async function createProduct(articleData) {
  console.log("상품 등록");
  const res = await instance.post("/products", articleData);
  return res.data;
}

export async function patchProduct(id, articleData) {
  console.log("상품 수정");
  const res = await instance.patch(`/products/${id}`, articleData);
  return res.data;
}

export async function deleteProduct(id) {
  console.log("상품 삭제");
  const res = await instance.delete(`/products/${id}`);
  return res.data;
}
