import { createArticle, getArticle, getArticleList } from "./apis/ArticleService.js";

console.table(await getArticleList(1, 100, "a"));
console.table(await getArticle(569));
console.table(await createArticle("test title", "test content", "test image"));
