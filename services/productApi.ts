import api from "@/lib/axios";
import {
  ProductCreateRequest,
  ProductDeleteResponse,
  ProductDetailResponse,
} from "@/types/products";

// 상품 상세 조회 API 호출 함수
export const getProduct = async (id: number) => {
  const response = await api.get<ProductDetailResponse>(`/products/${id}`);
  return response.data;
};

// 상품 수정 API 호출 함수
export const updateProduct = async (id: number, data: ProductCreateRequest) => {
  const response = await api.put(`/products/${id}`, data);
  return response.data;
};

// 상품 삭제 API 호출 함수
export const deleteProduct = async (id: number) => {
  const response = await api.delete<ProductDeleteResponse>(`/products/${id}`);
  return response.data;
};

// 해당 상품 좋아요 API 호출 함수
export const favoriteProduct = async (id: number) => {
  const response = await api.post<ProductDetailResponse>(
    `/products/${id}/favorite`,
  );
  return response.data;
};

// 해당 상품 좋아요 취소 API 호출 함수
export const unfavoriteProduct = async (id: number) => {
  const response = await api.delete<ProductDetailResponse>(
    `/products/${id}/favorite`,
  );
  return response.data;
};
