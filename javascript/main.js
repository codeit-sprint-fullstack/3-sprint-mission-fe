import { getArticleList } from "./ArticleService.js";
import { getProductList } from "./ProductService.js";

const res = await getProductList(1, 1, 1);
console.log(res);
const res1 = await getArticleList(1, 1, 1);
console.log(res1);

// async () => await getProductList
// console.log(await res())
// window.addEventListener('DOMContentLoaded', () => { console.log(async () => await getProductList(1, 1, 1))
// })
