import apiClient from '@/shared/api/apiClient';
import { ApiResponse } from '@/shared/api/types';
import { Product, ProductsParams } from './types';

const productApi = {
  async getProducts(params: ProductsParams) {
    try {
      const queryParams = new URLSearchParams(params as URLSearchParams);
      const response = await apiClient.get<ApiResponse<Product>>('products', { searchParams: queryParams }).json();
      return response;
    } catch (error) {
      console.error('Products 조회에 실패하였습니다.', error);
    }
  },
  async postProduct(product: Product) {
    try {
      return apiClient.post('product', { json: product }).json();
    } catch (error) {
      console.error('Product 생성에 실패하였습니다.', error);
    }
  },
  async getProduct(id: string) {
    try {
      return apiClient.get(`product/${id}`).json();
    } catch (error) {
      console.error('Product 상세 조회에 실패하였습니다.', error);
    }
  },
};

export default productApi;
