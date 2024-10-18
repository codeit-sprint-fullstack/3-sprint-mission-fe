const API_HOST = "https://sprint-mission-api.vercel.app";

//-------------------------상품 목록 조회----------------------
export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `${API_HOST}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );
    if (!response.ok) {
      throw new Error("상품 목록 조회 오류: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("오류:", error);
    return null;
  }
}

//-------------------------상품 등록----------------------
export async function createProduct(productData) {
  try {
    const response = await fetch(`${API_HOST}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error("상품 등록 오류: " + response.statusText);
    }
    const data = await response.json();

    return {
      status: data.status,
      body: data,
    };
  } catch (error) {
    console.error("오류:", error);
    return null;
  }
}

//-------------------------상품 상세 조회----------------------
export async function getProduct(id) {
  try {
    const response = await fetch(`${API_HOST}/products/${id}`);
    if (!response.ok) {
      throw new Error("상품 상세 조회 오류: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("오류:", error);
    return null;
  }
}

//-------------------------상품 수정----------------------
export async function patchProduct(id, productData) {
  try {
    const response = await fetch(`${API_HOST}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error("상품 수정 오류: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("오류:", error);
    return null;
  }
}

//-------------------------상품 삭제----------------------
export async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_HOST}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("상품 삭제 오류: " + response.statusText);
    }
    return response.status;
  } catch (error) {
    console.error("오류:", error);
    return null;
  }
}
