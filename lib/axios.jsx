import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export const articleAPI = {
  getArticles: () => instance.get("/article"),
  getArticleById: (id) => instance.get(`/article/${id}`),
  createArticle: (data) => instance.post("/article", data),
};

export const commentAPI = {
  getComments: (articleId) => instance.get(`/comment?articleId=${articleId}`),
  createComment: (data) => instance.post("/comment", data),
};

export const productAPI = {
  getProducts: () => instance.get("/product"),
  getProductById: (id) => instance.get(`/product/${id}`),
  createProduct: (data) => instance.post("/product", data),
};

export default instance;
