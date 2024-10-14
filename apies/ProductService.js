// Sprint Mission API

const BASE_URL = new URL('https://sprint-mission-api.vercel.app/products');

// GET Method
async function getProductList(page = 1, pageSize = 100, keyword) {
  const url = `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('에러가 났습니다.', error)
  }
}

async function getProduct() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('에러가 났습니다.', error)
  }
}

// const a = await getProduct()
// console.log(a)

// POST Method
async function createProduct(name, description, price, tags, images) {
  const surveyData = {
    "name": name,
    "description": description,
    "price": price,
    "tags": [ tags ],
    "images": [ images ]
  }

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(surveyData),
      headers: { "Content-Type": "application/json", },
    });
    const data = await response.json();
    return data
  } catch (error) {
    console.error('에러가 났습니다.', error)
  }
}

// PATCH Method
async function patchProduct(id, name, description, price, tags, images) {
  const url = `${BASE_URL}/${id}`;
  const surveyData = {
    "name": name,
    "description": description,
    "price": price,
    "tags": [ tags ],
    "images": [ images ]
  }

  try {
    const response = await fetch(BASE_URL, {
      method: "PATCH",
      body: JSON.stringify(surveyData),
      headers: { "Content-Type": "application/json", }
    });
    const data = await response.json();
    return data
  } catch (error) {
    console.error('에러가 났습니다.', error)
  }
}


// DELETE Method
async function deleteProduct(id) {
  const url = `${BASE_URL}/${id}`;

  try {
    const response = await fetch(BASE_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data
  } catch (error) {
    console.error('에러가 났습니다.', error)
  }
}

// Export
const ProductService = {
  getProductList, getProduct, createProduct, patchProduct, deleteProduct
}

export default ProductService;