import axios from "axios";
import { baseURL } from "./common.mjs";

const instance = axios.create(baseURL);

// order, page, pageSize, keyword
export async function getArticleList(
  page = 1,
  pageSize = 10,
  keyword = "",
  order = "id"
) {
  console.log("게시글 목록 조회");
  const res = await instance
    .get("/articles", {
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

export async function getArticle(id) {
  console.log("게시글 상세 조회");
  const res = await instance.get(`/articles/${id}`);
  return res.data;
}

export async function createArticle(articleData) {
  console.log("게시글 등록");
  const res = await instance.post("/articles", articleData);
  return res.data;
}

export async function patchArticle(id, articleData) {
  console.log("게시글 수정");
  const res = await instance.patch(`/articles/${id}`, articleData);
  return res.data;
}

export async function deleteArticle(id) {
  console.log("게시글 삭제");
  const res = await instance.delete(`/articles/${id}`);
  return res.data;
}

// 서드파티 이기 때문에 설치해줘야 한다.
//  npm install axios
