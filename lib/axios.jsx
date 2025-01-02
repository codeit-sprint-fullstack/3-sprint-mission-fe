import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://panda-market-api.vercel.app/",
  // withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // localStorage에서 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 헤더에 토큰 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // 오류 처리
  }
);

export const authAPI = {
  signUp: (data) => instance.post("/auth/signUp", data),

  signIn: (data) => instance.post("/auth/signIn", data),

  refreshToken: (data) => instance.post("/auth/refresh-token", data),
};

export const userAPI = {
  getMyInfo: () => instance.get("/users/me"),

  updateMyInfo: (data) => instance.patch("/users/me", data),

  changePassword: (data) => instance.patch("/users/me/password", data),

  getMyProducts: () => instance.get("/users/me/products"),

  getMyFavorites: () => instance.get("/users/me/favorites"),
};

export const articleAPI = {
  getArticles: (
    params = { page: 1, pageSize: 10, orderBy: "recent", keyword: "" }
  ) => instance.get("/articles", { params }),

  getArticleById: (id) => instance.get(`/articles/${id}`),

  postArticle: (data) => instance.post("/articles", data),

  modifyArticle: (id, data) => instance.patch(`/articles/${id}`, data),

  deleteArticle: (id) => instance.delete(`/articles/${id}`),

  likeArticle: (id) => instance.post(`/article/${id}/like`),

  unlikeArticle: (id) => instance.delete(`/article/${id}/like`),
};

export const commentAPI = {
  // Article
  getArticleComments: (articleId, params = { limit: 5, cursor: null }) =>
    instance.get(`/articles/${articleId}/comments`, { params }),

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

  modifyProduct: (id, data) => instance.patch(`/product/${id}`, data),

  deleteProduct: (id) => instance.delete(`/product/${id}`),

  favoriteProduct: (id) => instance.post(`/product/${id}/favorite`),

  unfavoriteProduct: (id) => instance.delete(`/product/${id}/favorite`),
};

export default instance;
