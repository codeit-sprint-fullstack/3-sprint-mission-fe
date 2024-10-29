const BASE_URL = 'https://panda-market-api.vercel.app/products'

export async function getProductList(page, pageSize, orderBy, keyword) {
  const params = new URLSearchParams({
    page,
    pageSize,
    orderBy,
    keyword
  });

  const url = `${BASE_URL}?${params}`

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