import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./fetchArticleApi.mjs";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./fetchProductApi.mjs";

/*
// GET
const data1 = await getArticleList();
console.log("🚀 ~ data1:", data1);
const data2 = await getArticleList(1, 2, "test");
console.log("🚀 ~ data2:", data2);

const data3 = await getArticle(973);
console.log("🚀 ~ data3:", data3);

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

// 출력값
// 게시글 등록
// {
//   id: 973,
//   title: 'article create test',
//   content: '아티클 컨텐츠 생성 테스트 입니다.',
//   image: 'https://pixabay.com/ko/illustrations/%EB%8F%BC%EC%A7%80-%EC%A0%80%EA%B8%88%ED%86%B5-%EB%8F%99%EC%A0%84-%EC%A0%80%EA%B8%88-%EB%8F%88-9070156/',
//   likeCount: 0
// }

// PATCH
const articleData2 = {
  title: "article create test",
  content: "아티클 컨텐츠 수정 테스트 입니다.",
  image:
    "https://pixabay.com/ko/illustrations/%EB%8F%BC%EC%A7%80-%EC%A0%80%EA%B8%88%ED%86%B5-%EB%8F%99%EC%A0%84-%EC%A0%80%EA%B8%88-%EB%8F%88-9070156/",
};

try {
  const res = await patchArticle(973, articleData2);
  console.log(res);
} catch (e) {
  if (e.response) {
    console.log(e.response.stautus);
    console.log(e.response.data);
  } else {
    console.log("PATCH 리퀘스트가 실패했습니다.");
  }
}

// 출력값
// 게시글 수정
// {
//   id: 973,
//   title: 'article create test',
//   content: '아티클 컨텐츠 수정 테스트 입니다.',
//   image: 'https://pixabay.com/ko/illustrations/%EB%8F%BC%EC%A7%80-%EC%A0%80%EA%B8%88%ED%86%B5-%EB%8F%99%EC%A0%84-%EC%A0%80%EA%B8%88-%EB%8F%88-9070156/',
//   likeCount: 0
// }


// DELETE
try {
  const res = await deleteArticle(973);
  console.log(res);
} catch (e) {
  if (e.response) {
    console.log(e.response.stautus);
    console.log(e.response.data);
  } else {
    console.log("DELETE 리퀘스트가 실패했습니다.");
  }
}
*/

// 상품 관련 API

/*
const data1 = await getProductList();
console.log("🚀 ~ data1:", data1);
const data2 = await getProductList(1, 2, "test");
console.log("🚀 ~ data2:", data2);

const data3 = await getProduct(507);
console.log("🚀 ~ data3:", data3);

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

// 출력값
// 상품 등록
// {
//   id: 507,
//   name: '폰티 발사믹 화이트 식초',
//   description: '발효식초',
//   price: 6850,
//   manufacturer: 'PONTI S.P.A',
//   tags: [ '발사믹 식초' ],
//   images: [
//     'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLMfCOPzQZas6GVILjL04hdX--FDAydTiSldMywxH3qXyIOulQSRsz3o6CvfkEOGt5YugX1kRHmFleGLxp0x-leWGJCEypq6clQemdVHx4LkIQoW_zzT-AUhWpwV0P2n5Xb11eEGA&usqp=CAc'
//   ],
//   favoriteCount: 0
// }

// PATCH
const productData2 = {
  name: "폰티 발사믹 화이트 식초",
  description: "이탈리아산 자연발효식초",
  price: 10000,
  manufacturer: "PONTI S.P.A",
  tags: ["발사믹 식초"],
  images: [
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLMfCOPzQZas6GVILjL04hdX--FDAydTiSldMywxH3qXyIOulQSRsz3o6CvfkEOGt5YugX1kRHmFleGLxp0x-leWGJCEypq6clQemdVHx4LkIQoW_zzT-AUhWpwV0P2n5Xb11eEGA&usqp=CAc",
  ],
};

try {
  const res = await patchArticle(507, productData2);
  console.log(res);
} catch (e) {
  if (e.response) {
    console.log(e.response.stautus);
    console.log(e.response.data);
  } else {
    console.log("PATCH 리퀘스트가 실패했습니다.");
  }
}

// 출력 결과
// message: '유효성 검사 오류입니다.',


// DELETE
try {
  const res = await deleteArticle(507);
  console.log(res);
} catch (e) {
  if (e.response) {
    console.log(e.response.stautus);
    console.log(e.response.data);
  } else {
    console.log("DELETE 리퀘스트가 실패했습니다.");
  }
}

// 출력 결과
// { message: '존재하지 않습니다.' }

*/

const data3 = await getProduct(507);
console.log("🚀 ~ data3:", data3);
