import axiosInstance from '@/lib/axios/axiosInstance';
import {
  CreateProductRequest,
  GetProductListParams,
  GetProductListResponse,
  GetProductResponse,
} from './types/product.types';
import {
  CommentListResponse,
  CommentRequest,
  CommentResponse,
} from './types/comment.types';

export const getProductList = async ({
  page = 0,
  pageSize = 10,
  orderBy = 'recent',
  word,
}: GetProductListParams = {}) => {
  try {
    const { data } = await axiosInstance.get<GetProductListResponse>(
      '/products',
      {
        params: {
          page,
          pageSize,
          orderBy,
          ...(word && { word: word }),
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

export const updateProduct = async (
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

export const getProductComments = async (id: number, take: number = 100) => {
  try {
    const { data } = await axiosInstance.get<CommentListResponse>(
      `products/${id}/comments`,
      {
        params: {
          take,
        },
      },
    );
    return data;
  } catch (e) {
    console.error('상품 댓글 불러오기 실패', e);
    throw e;
  }
};

export const createProductComments = async ({
  id: productId,
  content,
}: CommentRequest) => {
  try {
    const { data: comment } = await axiosInstance.post<CommentResponse>(
      `/products/${productId}/comments`,
      {
        content,
      },
    );
    return comment;
  } catch (e) {
    console.error('댓글 등록 실패', e);
    throw e;
  }
};

export const setProductFavorite = async (id: string) => {
  try {
    const { data } = await axiosInstance.post(`/products/${id}/favorite`);
    return data;
  } catch (e) {
    console.error('좋아요 실패', e);
    throw e;
  }
};

export const deleteProductFavorite = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/products/${id}/favorite`);
    return data;
  } catch (e) {
    console.error('좋아요 취소 실패', e);
    throw e;
  }
};
