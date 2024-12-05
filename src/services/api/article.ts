import axiosInstance from '@/lib/axios/axiosInstance';
import {
  Article,
  ArticleCommentResponse,
  CreateArticleRequest,
  GetArticleListParams,
  GetArticleListResponse,
} from '../types/article';

export const getArticleList = async ({
  skip = 0,
  take = 10,
  orderBy = 'recent',
  word,
}: GetArticleListParams = {}): Promise<GetArticleListResponse> => {
  const queryParams = new URLSearchParams({
    skip: skip.toString(),
    take: take.toString(),
    orderBy,
    ...(word && { word }),
  });
  try {
    const { data } = await axiosInstance.get<GetArticleListResponse>(
      `/articles?${queryParams.toString()}`,
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

export const getArticleComments = async (articleId: string) => {
  try {
    const { data } = await axiosInstance.get<ArticleCommentResponse>(
      `/articles/${articleId}/comments`,
    );
    return data;
  } catch (e) {
    console.error('댓글 조회 실패', e);
    throw e;
  }
};

export const createArticleComments = async (
  articleId: string,
  content: string,
) => {
  try {
    const comment = await axiosInstance.post(
      `/articles/${articleId}/comments`,
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
