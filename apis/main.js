import {
  getProductList,
  getProduct,
  createProduct,
  deleteProduct,
  patchProduct,
} from "./ProductService.js";

import {
  getArticle,
  getArticleList,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

// createProduct(bodyObj) 에 넣을 객체 생성 함수
function createProductBody(name, description, price, tags = [], images = []) {
  return { name, description, price, tags, images };
}

// patchProduct함수의 body에 넣을 객체 생성 일부만 넣어도 만들어지게
function patchProductBody(name, description, price, tags, images) {
  const productBody = {};

  // 전달된 값이 존재할 경우에만 해당 필드를 추가
  if (name) productBody.name = name;
  if (description) productBody.description = description;
  if (price) productBody.price = price;

  // tags와 images가 배열이고, 비어 있지 않을 경우에만 추가
  if (Array.isArray(tags) && tags.length > 0) {
    productBody.tags = tags;
  }

  if (Array.isArray(images) && images.length > 0) {
    productBody.images = images;
  }

  return productBody;
}

// createArticle(bodyObj) 에 넣을 객체 생성 함수
export function createArticleBody(title, content, image) {
  return { title, content, image };
}

// patchArticle함수의 body에 넣을 객체 생성 일부만 넣어도 만들어지게
function patchArticleBody(title, content, image) {
  const patchBody = {};
  if (title) patchBody.title = title;
  if (content) patchBody.content = content;
  if (image) patchBody.image = image;

  return patchBody;
}

//------------------------------게시물api실행--------------------------------//

// // 게시글 리스트 가져오기
// getArticleList()
//   .then((getDataList) => console.log("게시글 리스트:", getDataList)) // 성공 시 데이터 처리
//   .catch((error) => console.error("에러:", error)); // 실패 시 에러 처리

// // 게시글 가져오기 실행
// getArticle(112)
//   .then((getDataList) => console.log("게시글 리스트:", getDataList)) // 성공 시 데이터 처리
//   .catch((error) => console.error("에러:", error)); // 실패 시 에러 처리

// // 게시글 생성하기 실행
// const newArticle = createArticleBody("제목 예시", "내용", "이미지 주소");
// createArticle(newArticle)
//   .then(() => console.log("게시글 생성 완료"))
//   .catch((error) => console.error("에러 발생:", error));

// // 게시글 수정하기 실행
// const patchBody = patchArticleBody(null, "내용", "이미지 주소");

// patchArticle(970, patchBody)
//   .then(() => console.log("게시글 수정 완료"))
//   .catch((error) => console.error("에러 발생:", error));

// // 게시글 삭제 실행
// deleteArticle(970)
//   .then((data) => {
//     console.log("삭제 성공");
//   })
//   .catch((error) => console.error("에러:", error));

//-------------------------------상품api실행----------------------------------//

// // 상품 리스트 가져오기
// const getDataList = await getProductList();
// console.log(getDataList);

// // 상품 하나 가져오기 실행
// const getData = await getProduct(122);
// console.log(getData);

// // 상품 만들기
// const tagsArr = ["태그 테스트1"];
// const imagesArr = ["이미지 테스트1", "이미지 테스트2"];
// const productBody = createProductBody(
//   "키보드",
//   "기계식 키보드",
//   60000,
//   tagsArr,
//   imagesArr
// );
// const createData = await createProduct(productBody);
// console.log(createData);

// //상품 수정하기
// const changeImagesArr = ["바꾼 이미지 주소 테스트"];
// const patchBody = patchProductBody(
//   "이름바꾸기 테스트",
//   null,
//   null,
//   null,
//   changeImagesArr
// );
// const patchData = await patchProduct(458, patchBody);
// console.log(patchData);

// // 상품 제거하기 실행
// await deleteProduct(333);
