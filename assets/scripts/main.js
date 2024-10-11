import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
} from "./apis/ArticleService.js";

const newArticle = await createArticle({ title: "test", content: "content", image: "image" });
console.table(await getArticleList(1, 100, "test"));
console.table(await getArticle(newArticle.id));
console.table(
  await patchArticle(newArticle.id, {
    title: "patched title",
    content: "patched content",
    image: "patched image",
  })
);
await deleteArticle(569);
