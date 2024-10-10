import { getArticleList } from "./apis/ArticleService.js";

console.log(await getArticleList(1, 100, "a"));
