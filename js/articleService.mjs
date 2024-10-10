// import axios from "axios";
import { typeConfirm } from "./lib.mjs";

/** instance */
const instance = axios.create({
  baseURL: "https://sprint-mission-api.vercel.app",
  headers: {},
});
instance.interceptors.request.use(
  (config) => {
    console.log("request config", config);
    return config;
  },
  (error) => {
    console.error("request error", error);
  }
);
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

const { articles, products } = {
  articles: "/articles",
  products: "/products",
};

/** Get Article */
const getArticleBody = {
  page: 1,
  pageSize: 1,
  keyword: "string",
};
export async function getArticle(body = getArticleBody) {
  const typeCheck = typeConfirm(getArticleBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const url = `${articles}?page=${body.page}&pageSize=${body.pageSize}&keyword=${body.keyword}`;
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Get Article Error", error);
  }
}
// console.log(await getArticle({ page: 1, pageSize: 1, keyword: "test" }));

/** Create Article */
export const createArticleBody = {
  title: "string",
  content: "string",
  image: "string",
};
async function createArticle(body = createArticleBody) {
  const typeCheck = typeConfirm(getArticleBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const response = await instance.post(articles, body);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Create Article Error", error);
  }
}
// console.log(
//   await createArticle({
//     title: "타이틀입니다만",
//     content: "콘테츠입니다만",
//     image: "이미지입니다만.jpg",
//   })
// );

