// import axios from "axios";
import { typeConfirm } from "./lib.mjs";
import { instanceObject } from "./ProductService.mjs";
/** instance */
const instance = axios.create(instanceObject);
instance.interceptors.request.use(
  (config) => {
    // console.log("request config", config);
    return config;
  },
  (error) => {
    console.error("request error", error);
  }
);
instance.interceptors.response.use(
  (response) => {
    let text = "";
    switch (response.status) {
      case 200:
        text = "Get 조회";
        break;
      case 201:
        text = "";
        break;
      case 202:
        break;
      case 204:
        text = "Delete 삭제";
        break;
    }
    console.log(text);
    response.statusText = `${text} 성공`;
    // console.log("reponse", response);
    return response;
  },
  (error) => {
    console.error("response error", error);
    return Promise.reject(error);
  }
);

const { articles } = {
  articles: "/articles",
};

/** Get */
export const getBody = {
  page: 1,
  pageSize: 1,
  keyword: "string",
};
export async function getArticle(body = getBody) {
  const typeCheck = typeConfirm(getBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const url = `${articles}?page=${body.page}&pageSize=${body.pageSize}&keyword=${body.keyword}`;
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Get Article Error", error);
  }
}

/** Post */
export const createBody = {
  title: "string",
  content: "string",
  image: "string",
};
export async function createArticle(body = createBody) {
  const typeCheck = typeConfirm(createBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const response = await instance.post(articles, body);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Create Article Error", error);
  }
}

/** Patch */
export const patchBody = {
  id: 0,
  ...createBody,
};
export async function patchArticle(body = patchBody) {
  const typeCheck = typeConfirm(createBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const id = body.id;
    delete body.id;
    const response = await instance.patch(`${articles}/${id}`, body);
    return response.data;
  } catch (error) {
    if (!!error) console.error("Patch Article Error", error);
  }
}

/** Delete */
export const deleteBody = {
  id: 0,
};
export async function deleteArticle(body = deleteBody) {
  const typeCheck = typeConfirm(deleteBody, body);
  try {
    if (!typeCheck.result) throw console.error(typeCheck.message);
    const response = await instance.delete(`${articles}/${body.id}`);
    return response.data;
  } catch (error) {
    if (!!error)
      console.error(
        "Delete Article Error",
        "\n지울려고 하는 id가 없을 수도 있음"
      );
  }
}

// console.log(await deleteArticle({id:123}))
