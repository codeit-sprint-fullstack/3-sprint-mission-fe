import axiosInstance from '@/lib/axios/axiosInstance';
import {
  GetArticleResponse,
  CreateArticleRequest,
  GetArticleListParams,
  GetArticleListResponse,
} from './types/article.types';
import {
  CommentListResponse,
  CommentRequest,
  CommentResponse,
} from './types/comment.types';

export const getArticleList = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  word,
}: GetArticleListParams = {}): Promise<GetArticleListResponse> => {
  try {
    const { data } = await axiosInstance.get<GetArticleListResponse>(
      '/articles',
      {
        params: {
          page,
          pageSize,
          orderBy,
          ...(word && { word }),
        },
      },
    );

    return data;
  } catch (e) {
    console.error('게시글 불러오기 실패', e);
    throw e;
  }
};

export const createArticle = async (article: CreateArticleRequest) => {
  try {
    const { data } = await axiosInstance.post('/articles', article);
    return data;
  } catch (e) {
    console.error('게시글 생성 실패', e);
    throw e;
  }
};

export const updateArticle = async (
  articleId: string,
  article: Partial<CreateArticleRequest>,
) => {
  try {
    const { data } = await axiosInstance.patch(
      `/articles/${articleId}`,
      article,
    );
    return data;
  } catch (e) {
    console.error('게시물 수정 실패', e);
    throw e;
  }
};

export const getArticle = async (articleId: string) => {
  try {
    const { data } = await axiosInstance.get<GetArticleResponse>(
      `/articles/${articleId}`,
    );
    return data;
  } catch (e) {
    console.error('게시물 조회 실패', e);
    throw e;
  }
};

export const deleteArticle = async (articleId: string) => {
  try {
    await axiosInstance.delete<GetArticleResponse>(`/articles/${articleId}`);
  } catch (e) {
    console.error('게시물 삭제 실패', e);
    throw e;
  }
};

export const getArticleComments = async (
  articleId: number,
  limit: string = '100',
) => {
  try {
    const { data } = await axiosInstance.get<CommentListResponse>(
      `/articles/${articleId}/comments`,
      {
        params: {
          take: limit,
        },
      },
    );
    return data;
  } catch (e) {
    console.error('댓글 조회 실패', e);
    throw e;
  }
};

export const createArticleComments = async ({
  id: articleId,
  content,
}: CommentRequest) => {
  try {
    const { data } = await axiosInstance.post<CommentResponse>(
      `/articles/${articleId}/comments`,
      {
        content,
      },
    );
    return data;
  } catch (e) {
    console.error('댓글 등록 실패', e);
    throw e;
  }
};

export const setArticleFavorite = async (id: string) => {
  try {
    const { data } = await axiosInstance.post<GetArticleResponse>(
      `/articles/${id}/like`,
    );
    return data;
  } catch (e) {
    console.error('게시글 좋아요 실패', e);
    throw e;
  }
};

export const deleteArticleFavorite = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete<GetArticleResponse>(
      `/articles/${id}/like`,
    );
    return data;
  } catch (e) {
    console.error('게시글 좋아요 취소 실패', e);
    throw e;
  }
};
