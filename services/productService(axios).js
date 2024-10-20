import axios from 'axios';

const BASE_URL = 'https://sprint-mission-api.vercel.app/products';

// getProductList() : GET 메서드를 사용해 주세요.
// page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export async function getProductList(page, pageSize, keyword) {
  const params = { page, pageSize, keyword };

  try {
    const response = await axios.get(BASE_URL, { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`지정 에러: ${error.response.status} - ${error.response.statusText}`);
    } else {
      console.error("기타 에러:", error.message);
    }
  }
}

// getProduct() : GET 메서드를 사용해 주세요.
export async function getProduct(id) {
  const url = `${BASE_URL}/${id}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`지정 에러: ${error.response.status} - ${error.response.statusText}`);
    } else {
      console.error("기타 에러:", error.message);
    }
  }
}

// createProduct(): POST 메서드를 사용해 주세요.
// request body에 name, description, price, manufacturer, tags, images 를 포함해 주세요.
export async function createProduct(name, description, price, manufacturer, tags, images) {
  const productData = { name, description, price, manufacturer, tags, images };

  try {
    const response = await axios.post(BASE_URL, productData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`지정 에러: ${error.response.status}`);
    } else {
      console.error("기타 에러:", error.message);
    }
  }
}

// patchProduct() : PATCH 메서드를 사용해 주세요.
export async function patchProduct(id, updateData) {
  const url = `${BASE_URL}/${id}`;

  try {
    const response = await axios.patch(url, updateData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`지정 에러: ${error.response.status} ${error.response.statusText}`);
    } else {
      console.error("기타 에러:", error.message);
    }
  }
}

// deleteProduct() : DELETE 메서드를 사용해 주세요.
export async function deleteProduct(id) {
  const url = `${BASE_URL}/${id}`;

  try {
    const response = await axios.delete(url);
    console.log(response.status);
    console.log(response.statusText);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`삭제 실패: ID ${id}에 해당하는 제품을 찾을 수 없습니다.`);
    } else {
      console.error("기타 에러:", error.message);
    }
  }
}