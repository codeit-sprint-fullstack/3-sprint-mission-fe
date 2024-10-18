import {
  getArticleList,
  createArticle,
  getArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

import {
  getProductList,
  createProduct,
  getProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

//-----Article-----
//-----게시글 목록 조회-----
const searchArticleList = {
  page: 1,
  pageSize: 10,
  keyword: "암기빵",
};

(async () => {
  const articlelist = await getArticleList(
    searchArticleList.page,
    searchArticleList.pageSize,
    searchArticleList.keyword
  );

  if (articlelist) {
    console.log("게시글 목록:", articlelist);
  } else {
    console.log("게시글 목록을 가져오는 데 실패했습니다.");
  }
})();

//-----게시글 등록-----
const newArticle = {
  title: "암기빵",
  content: "암기빵 냠냠",
  image: "bread.png",
};

(async () => {
  const response = await createArticle(newArticle);
  console.log("생성 성공", response);
})();

//-----게시글 상세 조회-----
const searchArticle = {
  id: 817,
};

(async () => {
  const article = await getArticle(searchArticle.id);
  if (article) {
    console.log("게시글 :", article);
  } else {
    console.log("게시글 조회 실패");
  }
})();

//-----게시글 수정-----
const articleId = 818;
const updateArticleData = {
  title: "암기빵은 없어",
  content: "수정된 내용",
  image: "수정된 이미지",
};

(async () => {
  try {
    const article = await patchArticle(articleId, updateArticleData);
    if (article) {
      console.log("게시글 수정 완료:", article);
    } else {
      console.log("게시글 수정 실패");
    }
  } catch (error) {
    console.error("오류 발생:", error);
  }
})();

//-----게시글 삭제-----
(async () => {
  try {
    const status = await deleteArticle(948);
    if (status === 200) {
      console.log("삭제 성공");
    } else {
      console.log("삭제 실패");
    }
  } catch (error) {
    console.error("오류 발생:", error);
  }
})();

//-----Products-----
//-----상품 목록 조회-----
const searchProductList = {
  page: 1,
  pageSize: 100,
  keyword: "맥북",
};

(async () => {
  const productList = await getProductList(
    searchProductList.page,
    searchProductList.pageSize,
    searchProductList.keyword
  );

  if (productList) {
    console.log("상품 목록:", productList);
  } else {
    console.log("상품 목록을 가져오는 데 실패했습니다.");
  }
})();

//-----상품 등록-----
const newProduct = {
  name: "맥북 M2 Pro Max",
  description: "녹차를 살짝 쏟았지만 멀쩡합니다",
  price: 4900000,
  manufacturer: "애플",
  tags: ["맥북"],
  images: ["태진공주의 녹차 쏟은 맥북.png"],
};

(async () => {
  const response = await createProduct(newProduct);
  console.log("상품 등록 성공", response);
})();

//-----상품 상세 조회-----
const productIdForDetail = 463;
(async () => {
  const productDetail = await getProduct(productIdForDetail);
  if (productDetail) {
    console.log("상품 상세 정보:", productDetail);
  } else {
    console.log("상품 상세 조회 실패");
  }
})();

//-----상품 수정-----
const productId = 464;
const updatedProductData = {
  name: "멀쩡한 맥북",
  price: 5260000,
  description: "녹차를 쏟지 않은 멀쩡한 맥북",
};

(async () => {
  try {
    const data = await patchProduct(productId, updatedProductData);
    if (data) {
      console.log("상품 수정 완료:", data);
    } else {
      console.log("상품 수정 실패");
    }
  } catch (error) {
    console.error("오류 발생:", error);
  }
})();

//-----상품 삭제-----
(async () => {
  try {
    const status = await deleteProduct(467);
    if (status === 200) {
      console.log("상품 삭제 성공");
    } else {
      console.log("상품 삭제에 실패했습니다.");
    }
  } catch (error) {
    console.error("오류 발생:", error);
  }
})();
