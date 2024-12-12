import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export const articleAPI = {
  getArticles: () => instance.get("/article"),
  getArticleById: (id) => instance.get(`/article/${id}`),
  postArticle: (data) => instance.post("/article", data),
  modifyArticle: (id, data) => instance.patch(`/article/${id}`, data),
  deleteArticle: (id) => instance.delete(`/article/${id}`),
};

export const commentAPI = {
  // Article
  getArticleComments: (articleId) =>
    instance.get(`/comment/article/${articleId}`),

  postArticleComment: (articleId, content) =>
    instance.post(`/comment/article/${articleId}`, { content }),

  modifyArticleComment: (commentId, content) =>
    instance.patch(`/comment/article/${commentId}`, { content }),

  deleteArticleComment: (commentId) =>
    instance.delete(`/comment/article/${commentId}`),

  // Product
  getProductComments: (productId) =>
    instance.get(`/comment/product/${productId}`),

  postProductComment: (productId, content) =>
    instance.post(`/comment/product/${productId}`, { content }),

  modifyProductComment: (commentId, content) =>
    instance.patch(`/comment/product/${commentId}`, { content }),

  deleteProductComment: (commentId) =>
    instance.delete(`/comment/product/${commentId}`),
};

export const productAPI = {
  getProducts: () => instance.get("/product"),
  getProductById: (id) => instance.get(`/product/${id}`),
  createProduct: (data) => instance.post("/product", data),
};

export default instance;
