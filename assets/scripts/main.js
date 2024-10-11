import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
} from "./apis/ArticleService.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductList,
  patchProduct,
} from "./apis/ProductService.js";

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
await deleteArticle(newArticle.id);

console.table(await getProductList());
const newProduct = await createProduct({
  name: "test",
  description: "test",
  price: 50000,
  tags: ["test"],
  images: ["test"],
});
console.table(await getProduct(newProduct.id));
console.table(
  await patchProduct(newProduct.id, {
    name: "test",
    description: "test",
    price: 60000,
    tags: ["test"],
    images: ["test"],
  })
);
await deleteProduct(newProduct.id);
console.table(await getProductList());
