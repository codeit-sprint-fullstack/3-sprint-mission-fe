//instance
const instance = axios.create({
  baseURL: "https://sprint-mission-api.vercel.app",
});
const getArticleDefault = {
  page: 1,
  pageSize: 1,
  keyword: "",
};

//getArticle
async function getArticle(body = getArticleDefault) {
  const response = await instance.get(
    `/products?page=${body.page}&pageSize=${body.pageSize}&keyword=${body.keyword}`
  );
  return response.data;
}
// const sang = await getArticle({
//   page: 1,
//   pageSize: 10,
//   keyword: "테스트",
// });
// console.log(sang);

const createArticleDefault = {
  name: "string",
  description: "string",
  price: 0,
  manufacturer: "string",
  tags: ["string"],
  images: ["string"],
};

// create
async function createArticle(body = createArticleDefault) {
  const response = await instance.post(`/products`, body);
  return response.data;
}

// const status = await createArticle({
//   name: "테스트 상품입니다.2222",
//   description: "test_설명",
//   price: 10000,
//   manufacturer: "이게뭔데",
//   tags: ["잡동사니", "쓸모없는"],
//   images:["없음"]
// });
// console.log(status);
