const BASE_URL = 'https://sprint-mission-api.vercel.app/products'



// getProductList() : GET 메서드를 사용해 주세요.
//  page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export function getProductList(page, pageSize, keyword) {
  const url = `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${encodeURIComponent(keyword)}`

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`지정 에러: ${response.status} - ${response.statusText}`); // 내가 지정한 오류 핸들링
      return response.json().then(data => {
        console.log(data);
        return data
      });
    })
    .catch(error => {
      console.error("기타 에러:", error); // 서버 등 예측하지 못한 에러 위해
    });
}


// getProduct() : GET 메서드를 사용해 주세요.
export function getProduct(id) {
  const url = `${BASE_URL}/${id}`

  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`지정 에러: ${response.status} - ${response.statusText}`); // 내가 지정한 오류 핸들링
      return response.json().then(data => {
        console.log(data);
        return data;
      });
    })
    .catch(error => {
      console.error("기타 에러:", error); // 서버 등 예측하지 못한 에러 위해
    });
}