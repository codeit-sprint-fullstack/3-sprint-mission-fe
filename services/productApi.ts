import api from "@/lib/axios";
import {
  ProductCreateRequest,
  ProductDeleteResponse,
  ProductDetailResponse,
} from "@/types/products";

// 상품 생성 API 호출 함수
export const createProduct = async (data: ProductCreateRequest) => {
  const response = await api.post<ProductCreateRequest>("/products", data);
  return response.data;
};

// 전체 상품 조회 API 호출 함수
export const getProductList = async (
  pageNo: number,
  pageSize: number,
  orderBy: "recent" | "favorite" = "recent",
  keyword: string,
) => {
  const response = await api.get(
    `/products?page=${pageNo}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
  );
  return response.data;
};

// 베스트 상품 조회 API 호출 함수
export const getBestProducts = async (pageSize: number) => {
  const response = await api.get(
    `/products?page=1&pageSize=${pageSize}&orderBy=favorite`,
  );
  return response.data;
};

// 상품 상세 조회 API 호출 함수
export const getProduct = async (id: number) => {
  const response = await api.get<ProductDetailResponse>(`/products/${id}`);
  return response.data;
};

// 상품 수정 API 호출 함수
export const updateProduct = async (id: number, data: ProductCreateRequest) => {
  const response = await api.patch(`/products/${id}`, data);
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
