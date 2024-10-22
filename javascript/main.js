import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from "./ArticleService.js";
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from "./ProductService.js";

async () => await getArticleList;
console.log(await res());
window.addEventListener("DOMContentLoaded", () => {
  console.log(async () => await getArticleList(1, 1, 1));
});

async () => await getProductList;
console.log(await res());
window.addEventListener("DOMContentLoaded", () => {
  console.log(async () => await getProductList(1, 1, 1));
});
