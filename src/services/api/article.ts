import axiosInstance from '@/lib/axios/axiosInstance';
import { GetArticleListParams, GetArticleListResponse } from '../types/article';

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
    const { data } = await axiosInstance.get(
      `/articles?${queryParams.toString()}`,
    );

    return data;
  } catch (e) {
    console.error('게시글 불러오기 실패', e);
    throw e;
  }
};
