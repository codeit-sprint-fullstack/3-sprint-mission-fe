import { NormalArticleListProps } from '@/lib/types/props.types';
import { getArticleList } from '@/services/api/article';
import { useQuery } from '@tanstack/react-query';

export const useNormalArticleListQuery = ({
  searchParams,
}: NormalArticleListProps) => {
  return useQuery({
    queryKey: ['normalArticles', searchParams.word],
    queryFn: () =>
      getArticleList({
        page: Number(searchParams.page) || 1,
        pageSize: Number(searchParams.pageSize) || 10,
        word: searchParams.word,
        orderBy: searchParams.orderBy || 'recent',
      }),
  });
};
