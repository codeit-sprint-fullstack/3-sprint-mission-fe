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
import { DOCUMENT_ERROR_MESSAGES } from "./constants/messages.js";

let newArticle;
createArticle({ title: "test", content: "content", image: "image" })
  .then((response) => {
    console.log("New article created:", response);
    newArticle = response;
    return getArticleList(1, 100, "test");
  })
  .catch((e) => {
    console.error(DOCUMENT_ERROR_MESSAGES.failCreatingDocument, e.message);
  })
  .then((articleList) => {
    console.table(articleList);
    return getArticle(newArticle);
  })
  .catch((e) => {
    console.error(DOCUMENT_ERROR_MESSAGES.failGettingDocumentList, e.message);
  })
  .then((article) => {
    console.table(article);
    return patchArticle(newArticle, {
      title: "patched title",
      content: "patched content",
      image: "patched image",
    });
  })
  .catch((e) => {
    console.error(DOCUMENT_ERROR_MESSAGES.failPatchingDocument, e.message);
  })
  .then((patchedArticle) => {
    console.table(patchedArticle);
    return deleteArticle(newArticle);
  })
  .catch((e) => {
    console.error(DOCUMENT_ERROR_MESSAGES, e.message);
  })
  .then(() => {
    console.log("삭제 성공");
  });

let newProduct;

try {
  newProduct = await createProduct({
    name: "test",
    description: "test",
    price: 50000,
    tags: ["test"],
    images: ["test"],
  });
  console.table(newProduct);
} catch (e) {
  console.error(DOCUMENT_ERROR_MESSAGES.failCreatingDocument, e.message);
}

try {
  console.table(await getProductList());
} catch (e) {
  console.error(DOCUMENT_ERROR_MESSAGES.failGettingDocumentList, e.message);
}

try {
  console.table(await getProduct(newProduct.id));
} catch (e) {
  console.error(DOCUMENT_ERROR_MESSAGES.failGettingDocument, e.message);
}

try {
  console.table(
    await patchProduct(newProduct.id, {
      name: "patched name",
      description: "patched description",
      price: 60000,
      tags: ["patched tag"],
      images: ["patched image"],
    })
  );
} catch (e) {
  console.error(DOCUMENT_ERROR_MESSAGES.patchArticle, e.message);
}

try {
  await deleteProduct(newProduct.id);
  console.log(DOCUMENT_ERROR_MESSAGES.succededDeletingDocument);
} catch (e) {
  console.error(DOCUMENT_ERROR_MESSAGES.failDeletingDocument, e.message);
}
