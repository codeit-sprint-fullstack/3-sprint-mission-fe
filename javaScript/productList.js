// // product
// //상품 목록 조회
const productsApi = "https://sprint-mission-api.vercel.app/products";

async function getProductList(page, pageSize, keyword) {
  const url = new URL(productsApi);
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);
  url.searchParams.append("keyword", keyword);

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("실패");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

//상품 등록
async function getProduct(
  name,
  description,
  price,
  manufacturer,
  tags,
  images
) {
  const bodyData = { name, description, price, manufacturer, tags, images };
  try {
    const response = await fetch(productsApi, {
      body: JSON.stringify(bodyData),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("실패");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

//상품 상세 조회
async function createProduct(id, name, description, price, tags, images) {
  const bodyData = { name, description, price, tags, images };
  try {
    const response = await fetch(`${productsApi}/${id}`, {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("실패");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

//상품수정
async function patchProduct(id, title, content, image) {
  const bodyData = { title, content, image };
  try {
    const response = await fetch(`${productsApi}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(bodyData),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("실패");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

//상품삭제
async function deleteProduct(id) {
  try {
    const response = await fetch(`${articlesApi}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("실패");
  } catch (error) {
    console.error(error);
  }
}

// const good = await getProductList(10,50,"초콜릿")
// console.log(good);
