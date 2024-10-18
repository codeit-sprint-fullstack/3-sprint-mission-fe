import {
  createArticle,
  getArticleList,
  deleteArticle,
  getArticle,
} from "./ArticleService.js";

import {
  getProductList,
  createProduct,
  deleteProduct,
} from "./ProductService.js";

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
  if (status === 200) {
    console.log("게시글 목록:", articlelist);
  } else {
    console.log("게시글 목록 확인 실패");
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
  if (status === 200) {
    console.log("게시글 :", article);
  } else {
    console.log("게시글 조회 실패");
  }
})();

//-----게시글 수정-----
const updateArticle = {
  id: 818,
  title: "암기빵은 없어",
  content: "수정된 내용",
};

(async () => {
  try {
    const article = await patchArticle(updateArticle.id, updateArticle);
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
deleteArticle(848).then((status) => {
  if (status === 200) {
    console.log("삭제 성공");
  } else {
    console.log("삭제 실패");
  }
});

//----------Products-------------
const searchProductList = {
  page: 1,
  pageSize: 100,
  keyword: "맥북",
};

async () => {
  const Plist = await getProductList(
    searchProductList.page,
    searchProductList.pageSize,
    searchProductList.keyword
  ).then((data) => {
    if (data) {
      console.log("상품 목록:", data);
    } else {
      console.log("상품 목록을 가져오는 데 실패했습니다.");
    }
  });
};

createProduct({
  name: "맥북 M2 Pro Max",
  description: "녹차를 살짝 쏟았지만 멀쩡합니다",
  price: 4900000,
  manufacturer: "애플",
  tags: ["맥북"],
  images: [
    "https://web.joongna.com/cafe-article-data/live/2024/08/30/1074225290/1725025937193_000_0IIoV_main.jpg.",
  ],
}).then((data) => {
  if (data) {
    console.log("생성된 상품:", data);
  } else {
    console.log("상품 생성에 실패했습니다.");
  }
});

deleteProduct(1).then((status) => {
  if (status === 200) {
    console.log("상품 삭제 성공");
  } else {
    console.log("상품 삭제에 실패했습니다.");
  }
});
