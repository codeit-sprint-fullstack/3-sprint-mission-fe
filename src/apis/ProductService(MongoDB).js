const BASE_URL = 'http://localhost:8000/api/products';

export async function getProductList(offset, limit, orderBy, keyword) {
  const params = new URLSearchParams({
    offset,
    limit,
    orderBy,
    keyword,
  });

  const url = `${BASE_URL}?${params}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`지정 에러: ${response.status} - ${response.statusText}`); // 내가 지정한 오류 핸들링
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("기타 에러:", error); // 서버 등 예측하지 못한 에러 위해
  }
}

export async function registerProduct(productData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error(`등록 실패: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("상품 등록 중 오류:", error);
  }
}