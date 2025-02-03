import api from "@/lib/axios";
import {
  ArticleCreateRequest,
  ArticleCreateResponse,
  ArticleDeleteResponse,
  ArticleListResponse,
} from "@/types/articles";

// 아티클 생성 API 호출 함수
export const createArticle = async (data: ArticleCreateRequest) => {
  const response = await api.post<ArticleCreateResponse>("/articles", data);
  return response.data;
};

// 전체 아티클 조회 API 호출 함수
export const getArticleList = async (
  pageNo: number,
  pageSize: number,
  orderBy: "recent" | "like" = "recent",
  keyword: string,
) => {
  const response = await api.get<ArticleListResponse>(
    `/articles?page=${pageNo}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
  );
  return response.data;
};

// 베스트 아티클 조회 API 호출 함수
export const getBestArticles = async (pageSize: number) => {
  const response = await api.get<ArticleListResponse>(
    `/articles?page=1&pageSize=${pageSize}&orderBy=like`,
  );
  return response.data;
};

// 아티클 상세 조회 API 호출 함수
export const getArticle = async (id: number) => {
  const response = await api.get<ArticleCreateResponse>(`/articles/${id}`);
  return response.data;
};

// 아티클 수정 API 호출 함수
export const updateArticle = async (id: number, data: ArticleCreateRequest) => {
  const response = await api.patch<ArticleCreateResponse>(
    `/articles/${id}`,
    data,
  );
  return response.data;
};

// 아티클 삭제 API 호출 함수
export const deleteArticle = async (id: number) => {
  const response = await api.delete<ArticleDeleteResponse>(`/articles/${id}`);
  return response.data;
};

// 해당 아티클 좋아요 API 호출 함수
export const likeArticle = async (id: number) => {
  const response = await api.post<ArticleCreateResponse>(
    `/articles/${id}/like`,
  );
  return response.data;
};

// 해당 아티클 좋아요 취소 API 호출 함수
export const unlikeArticle = async (id: number) => {
  const response = await api.delete<ArticleCreateResponse>(
    `/articles/${id}/like`,
  );
  return response.data;
};
