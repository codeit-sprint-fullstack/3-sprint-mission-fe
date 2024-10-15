import { get, post, patch, del } from './axiosClient.js';

// 상품 목록 조회
const getProductList = async (page = 1, pageSize = 100, keyword) => {
  if (!keyword) {
    alert('Keyword is required');
    return;
  }
  try {
    const response = await get(
      `/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );
    return response;
  } catch (error) {
    console.error('상품 목록 조회 실패:', error);
  }
};

//
const getProduct = async (id) => {
  if (!id) {
    alert('상품 id 값이 필요합니다.');
    return;
  }
  try {
    const response = await get(`/products/${id}`);
    return response;
  } catch (error) {
    console.error(`${id} 상품 상세 조회 실패:`, error);
  }
};

// 상품 등록
const createProduct = async ({
  name,
  description,
  price,
  tags = [],
  images = [],
}) => {
  if (
    !name ||
    !description ||
    !price ||
    tags.length === 0 ||
    images.length === 0
  ) {
    alert('Name, description, price, tags, images 정보가 필요합니다.');
    return;
  }

  const data = { name, description, price, tags, images };

  try {
    const response = await post('/products', data);
    return response;
  } catch (error) {
    console.error('상품 등록 실패:', error);
  }
};

// 상품 수정
const patchProduct = async (
  id,
  { name, description, price, tags = [], images = [] }
) => {
  if (
    !id ||
    !name ||
    !description ||
    !price ||
    tags.length === 0 ||
    images.length === 0
  ) {
    alert(
      'Product ID, name, description, price, tags, images 정보가 필요합니다.'
    );
    return;
  }

  const data = { name, description, price, tags, images };

  try {
    const response = await patch(`/products/${id}`, data);
    return response;
  } catch (error) {
    console.error(`${id} 상품 수정 실패:`, error);
  }
};

// 상품 삭제
const deleteProduct = async (id) => {
  if (!id) {
    alert('Product ID is required');
    return;
  }
  try {
    const response = await del(`/products/${id}`);
    return response;
  } catch (error) {
    console.error(`${id} 상품 삭제 실패:`, error);
  }
};

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
