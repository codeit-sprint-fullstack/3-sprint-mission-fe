import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./articleApi.mjs";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./productsApi.mjs";

// GET
// const data1 = await getArticleList();
// const data2 = await getArticleList(1, 700, "피데기");
// console.log("키워드 값 있음", data2);

const data3 = await getArticle(964);
console.log(data3);

// POST
const articleData = {
  title: "article create test",
  content: "아티클 컨텐츠 생성 테스트 입니다.",
  image:
    "https://pixabay.com/ko/illustrations/%EB%8F%BC%EC%A7%80-%EC%A0%80%EA%B8%88%ED%86%B5-%EB%8F%99%EC%A0%84-%EC%A0%80%EA%B8%88-%EB%8F%88-9070156/",
};

try {
  const res = await createArticle(articleData);
  console.log(res);
} catch (e) {
  if (e.response) {
    console.log(e.response.stautus);
    console.log(e.response.data);
  } else {
    console.log("POST 리퀘스트가 실패했습니다.");
  }
}
/*
// PATCH
const articleData2 = {
  title: "article create test",
  content: "아티클 컨텐츠 수정 테스트 입니다.",
  image:
    "https://pixabay.com/ko/illustrations/%EB%8F%BC%EC%A7%80-%EC%A0%80%EA%B8%88%ED%86%B5-%EB%8F%99%EC%A0%84-%EC%A0%80%EA%B8%88-%EB%8F%88-9070156/",
};

try {
  const res = await patchArticle(801, articleData2);
  console.log(res);
} catch (e) {
  if (e.response) {
    console.log(e.response.stautus);
    console.log(e.response.data);
  } else {
    console.log("PATCH 리퀘스트가 실패했습니다.");
  }
}

// DELETE
try {
  const res = await deleteArticle(964);
  console.log(res);
} catch (e) {
  if (e.response) {
    console.log(e.response.stautus);
    console.log(e.response.data);
  } else {
    console.log("DELETE 리퀘스트가 실패했습니다.");
  }
}

// 상품 관련 API

// POST
const productData = {
  name: "폰티 발사믹 화이트 식초",
  description: "발효식초",
  price: 6850,
  manufacturer: "PONTI S.P.A",
  tags: ["발사믹 식초"],
  images: [
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLMfCOPzQZas6GVILjL04hdX--FDAydTiSldMywxH3qXyIOulQSRsz3o6CvfkEOGt5YugX1kRHmFleGLxp0x-leWGJCEypq6clQemdVHx4LkIQoW_zzT-AUhWpwV0P2n5Xb11eEGA&usqp=CAc",
  ],
};

try {
  const res = await createProduct(productData);
  console.log(res);
} catch (e) {
  if (e.response) {
    console.log(e.response.stautus);
    console.log(e.response.data);
  } else {
    console.log("POST 리퀘스트가 실패했습니다.");
  }
}
*/
