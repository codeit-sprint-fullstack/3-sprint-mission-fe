// 상품 리스트 가져오기
export async function getProductList(page = 1, pageSize = 100, keyword = "") {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("상품 리스트 불러오기 성공");
    } else {
      console.log("상품 리스트 불러오기 실패: " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return `먼가 오류 발생!!! => ${err}`;
  }
}
// // 상품 리스트 가져오기 실행
// const getDataList = await getProductList();
// console.log(getDataList);

// 하나의 게시글 가져오기
export async function getProduct(id) {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/products/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log(`id가 ${id}인 상품 불러오기 성공`);
    } else {
      console.log(`id가 ${id}인 상품 불러오기 실패` + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return `먼가 오류 발생!!! => ${err}`;
  }
}
// // 상품 하나 가져오기 실행
// const getData = await getProduct(19);
// console.log(getData);

// 상품 만들기
export async function createProduct(bodyObj) {
  try {
    const response = await fetch(
      "https://sprint-mission-api.vercel.app/products",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(bodyObj),
      }
    );
    if (response.ok) {
      console.log(`상품 생성하기 성공 - 생성한 상품 내용 = ${bodyObj}`);
    } else {
      console.log("상품 생성하기 실패" + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return `먼가 오류 발생!!! => ${err}`;
  }
}
// // 상품 생성하기 실행
// // createProduct(bodyObj) 에 넣을 객체 생성 함수
// function createProductBody(name, description, price, tags = [], images = []) {
//   return { name, description, price, tags, images };
// }
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

// 상품 수정하기
export async function patchProduct(id, patchBodyObj) {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/products/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(patchBodyObj),
      }
    );
    if (response.ok) {
      console.log(
        `id=${id} 상품 수정하기 성공 - 상품 게시글 내용 = ${patchBodyObj}`
      );
    } else {
      console.log(`id=${id} 상품 수정하기 실패` + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return `먼가 오류 발생!!! => ${err}`;
  }
}

// // 상품 수정하기 실행
// // patchProduct함수의 body에 넣을 객체 생성 일부만 넣어도 만들어지게
// function patchProductBody(name, description, price, tags, images) {
//   const productBody = {};

//   // 전달된 값이 존재할 경우에만 해당 필드를 추가
//   if (name) productBody.name = name;
//   if (description) productBody.description = description;
//   if (price) productBody.price = price;

//   // tags와 images가 배열이고, 비어 있지 않을 경우에만 추가
//   if (Array.isArray(tags) && tags.length > 0) {
//     productBody.tags = tags;
//   }

//   if (Array.isArray(images) && images.length > 0) {
//     productBody.images = images;
//   }

//   return productBody;
// }

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

// 상품 지우기
export async function deleteProduct(id) {
  try {
    const response = await fetch(
      `https://sprint-mission-api.vercel.app/products/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (response.ok) {
      console.log(`id=${id} 상품 삭제하기 성공`);
    } else {
      console.log(`id=${id} 상품 삭제하기 실패` + response.statusText);
    }
  } catch (err) {
    return `먼가 오류 발생!!! => ${err}`;
  }
}
// // 상품 제거하기 실행
// await deleteProduct(142);
