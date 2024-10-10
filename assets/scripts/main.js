import { getArticle, getArticleList } from "./apis/ArticleService.js";

console.log(await getArticleList(1, 100, "a"));
console.log(await getArticle(569));
