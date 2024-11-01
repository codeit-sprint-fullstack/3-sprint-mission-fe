import { get } from '../utils/axiosClient.ts';

// 베스트 상품 조회

const getBestProducts = async (pageSize: number) => {
  try {
    const response = await get(
      `/products?page=1&pageSize=${pageSize}&orderBy=favorite`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// 판매 중인 상품 조회
const getProductsForSale = async (
  pageNo: number,
  pageSize: number,
  orderBy: string,
  keyword: string
) => {
  try {
    const response = await get(
      `/products?page=${pageNo}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getBestProducts, getProductsForSale };
