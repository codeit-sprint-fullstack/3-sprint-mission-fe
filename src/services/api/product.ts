import axiosInstance from '@/lib/axios/axiosInstance';
import {
  CreateProductRequest,
  GetProductListParams,
  GetProductListResponse,
  GetProductResponse,
} from './types/product';

export const getProductList = async ({
  page = 0,
  pageSize = 10,
  orderBy = 'recent',
  keyword,
}: GetProductListParams = {}) => {
  try {
    const { data } = await axiosInstance.get<GetProductListResponse>(
      '/products',
      {
        params: {
          page,
          pageSize,
          orderBy,
          ...(keyword && { keyword }),
        },
      },
    );

    return data;
  } catch (e) {
    console.error('상품목록 불러오기 실패', e);
    throw e;
  }
};

export const getProduct = async (id: string) => {
  try {
    const { data } = await axiosInstance.get<GetProductResponse>(
      `/products/${id}`,
    );

    return data;
  } catch (e) {
    console.error('상품 불러오기 실패', e);
    throw e;
  }
};

export const createProduct = async (body: CreateProductRequest) => {
  try {
    const { data } = await axiosInstance.post<GetProductResponse>(
      '/products',
      body,
    );

    return data;
  } catch (e) {
    console.error('상품 생성 실패', e);
    throw e;
  }
};

export const patchProduct = async (
  id: string,
  body: Partial<CreateProductRequest>,
) => {
  try {
    const { data } = await axiosInstance.patch<GetProductResponse>(
      `products/${id}`,
      body,
    );

    return data;
  } catch (e) {
    console.error('상품 수정 실패', e);
    throw e;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await axiosInstance.delete(`products/${id}`);
  } catch (e) {
    console.error('상품 삭제 실패', e);
    throw e;
  }
};
