const BASE_URL = 'https://sprint-mission-api.vercel.app/products'



// getProductList() : GET 메서드를 사용해 주세요.
//  page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export async function getProductList(page, pageSize, keyword) {
  const url = `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${encodeURIComponent(keyword)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`지정 에러: ${response.status} - ${response.statusText}`); // 내가 지정한 오류 핸들링
    }

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error("기타 에러:", error); // 서버 등 예측하지 못한 에러 위해
  }
}



// getProduct() : GET 메서드를 사용해 주세요.
export async function getProduct(id) {
  const url = `${BASE_URL}/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`지정 에러: ${response.status} - ${response.statusText}`); // 내가 지정한 오류 핸들링

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error("기타 에러:", error); // 서버 등 예측하지 못한 에러 위해
  }
}



// createProduct(): POST 메서드를 사용해 주세요.
//  request body에 name, description, price, manufacturer, tags, images 를 포함해 주세요.
export async function createProduct(name, description, price, manufacturer, tags, images) {
  const productData = {
    name,
    description,
    price,
    manufacturer,
    tags,
    images,
  };

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error(`지정 에러: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data

  } catch (error) {
    console.error("기타 에러:", error);
  }
}



// patchProduct() : PATCH 메서드를 사용해 주세요.
export async function patchProduct(id, updateData) {
  const url = `${BASE_URL}/${id}`

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error(`지정 에러: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data

  } catch (error) {
    console.error("기타 에러:", error.message);
  }
}



// deleteProduct() : DELETE 메서드를 사용해 주세요.
export async function deleteProduct(id) {
  const url = `${BASE_URL}/${id}`

  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`삭제 실패: ID ${id}에 해당하는 제품을 찾을 수 없습니다.`);
      } else {
        throw new Error(`지정 에러: ${response.status} ${response.statusText}`);
      }
    }

    console.log(response.status);
    console.log(response.statusText);
    return response;

  } catch (error) {
    console.error("기타 에러:", error.message);
  }
}