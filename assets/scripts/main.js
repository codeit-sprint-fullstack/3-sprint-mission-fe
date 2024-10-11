import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
} from "./apis/ArticleService.js";

console.table(await getArticleList(1, 100, "a"));
console.table(await getArticle(569));
console.table(await createArticle({ title: "test", content: "content", image: "image" }));
console.table(
  await patchArticle(691, {
    title: "patched title",
    content: "patched content",
    image: "patched image",
  })
);
await deleteArticle(569);
