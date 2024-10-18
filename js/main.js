import {
  createArticle,
  getArticleList,
  deleteArticle,
} from "./ArticleService.js";

import {
  getProductList,
  createProduct,
  deleteProduct,
} from "./ProductService.js";

//-----게시글 생성-----
const newArticle = {
  title: "암기빵",
  content:
    "암기하고 싶은 부분에 빵을 찍은 후 먹으면 찍힌 부분의 내용을 암기할 수 있음",
  image:
    "https://i.namu.wiki/i/F6qrMbMMeB6EOmJftuv30APR2F8-UFbT1_Hbzm5LS3NIU44X_uD9hfHhwK0YdxC3l8-94TnBA-erm1FNJlXUow.webp",
};

(async () => {
  const response = await createArticle(newArticle);
  console.log("생성 성공", response);
})();

//-----게시글 목록 조회-----
const searchArticleList = {
  page: 1,
  pageSize: 100,
  keyword: "암기빵",
};

(async () => {
  const Alist = await getArticleList(
    searchArticleList.page,
    searchArticleList.pageSize,
    searchArticleList.keyword
  );
  if (status === 200) {
    console.log("상품 목록:", Alist);
  } else {
    console.log("상품 조회 실패");
  }
})();

//상세 조회 없음

//-----게시글 삭제-----
deleteArticle(817).then((status) => {
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
