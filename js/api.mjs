// import axios from "axios";

const instance = axios.create({
  baseURL: "https://sprint-mission-api.vercel.app",
});
async function getArticle(
  body = {
    page: 1,
    pageSize: 1,
    keyword: "",
  }
) {
  const response = await instance.get(
    `/products?page=${body.page}&pageSize=${body.pageSize}&keyword=${body.keyword}`
  );
  return response.data;
}
const sang = await getArticle({
  page: 1,
  pageSize:10,
  keyword:"상품"
});
console.log(sang);
