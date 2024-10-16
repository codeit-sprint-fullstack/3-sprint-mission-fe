import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './ArticleService.js';
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './ProductService.js';
import { formattedDate } from './util.js';

await getArticleList(1, 700, "");
console.log("---------------------------------");
await createArticle({
  title: "테스트 제목",
  content: "테스트 내용",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Eye_open_font_awesome.svg",
})
  .then(() => getArticleList(1, 50, "테스트"))
  .catch((error) => console.error(error));

// await patchArticle(772, {
//   title: "수정된 제목",
//   content: "수정된 내용",
//   image:
//     "https://upload.wikimedia.org/wikipedia/commons/6/68/Eye_open_font_awesome.svg",
// });
await getArticle(773);

await getProductList(1, 50, "")
  .then(() => {
    try {
      createProduct({
        name: "테스트 상품",
        description: "테스트 상품 설명",
        price: 10000,
        tags: ["테스트", "상품"],
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/6/68/Eye_open_font_awesome.svg",
        ],
      });
    } catch (error) {
      console.error(error);
    }
  })
  .then(() => getProductList(1, 50, "테스트"));
