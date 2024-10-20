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

// 하나의 상품 가져오기
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
      console.log(
        `상품 생성하기 성공 - 생성한 상품 내용 = ${JSON.stringify(
          bodyObj,
          null,
          2
        )}`
      );
    } else {
      console.log("상품 생성하기 실패" + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return `먼가 오류 발생!!! => ${err}`;
  }
}

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
        `id=${id} 상품 수정하기 성공 - 상품 게시글 내용 = ${JSON.stringify(
          patchBodyObj,
          null,
          2
        )}`
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
