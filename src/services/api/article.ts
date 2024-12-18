import axiosInstance from '@/lib/axios/axiosInstance';
import {
  Article,
  CreateArticleRequest,
  GetArticleListParams,
  GetArticleListResponse,
} from './types/article';
import {
  CommentListResponse,
  CommentRequest,
  CommentResponse,
} from './types/comment';

export const getArticleList = async ({
  skip = 0,
  take = 10,
  orderBy = 'recent',
  word,
}: GetArticleListParams = {}): Promise<GetArticleListResponse> => {
  try {
    const { data } = await axiosInstance.get<GetArticleListResponse>(
      '/articles',
      {
        params: {
          skip,
          take,
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
    const { data } = await axiosInstance.get<Article>(`/articles/${articleId}`);
    return data;
  } catch (e) {
    console.error('게시물 조회 실패', e);
    throw e;
  }
};

export const deleteArticle = async (articleId: string) => {
  try {
    await axiosInstance.delete<Article>(`/articles/${articleId}`);
  } catch (e) {
    console.error('게시물 삭제 실패', e);
    throw e;
  }
};

export const getArticleComments = async (
  articleId: string,
  limit: string = '100',
) => {
  try {
    const { data } = await axiosInstance.get<CommentListResponse>(
      `/articles/${articleId}/comments`,
      {
        params: {
          limit,
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
