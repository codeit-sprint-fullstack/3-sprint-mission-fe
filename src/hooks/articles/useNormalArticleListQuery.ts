import { NormalArticleListProps } from '@/lib/types/props.types';
import { getArticleList } from '@/services/api/article';
import { useQuery } from '@tanstack/react-query';

export const useNormalArticleListQuery = ({
  searchParams,
  initialData,
}: NormalArticleListProps) => {
  return useQuery({
    queryKey: ['normalArticles', searchParams.word],
    queryFn: () =>
      getArticleList({
        skip: Number(searchParams.skip) || 0,
        take: Number(searchParams.take) || 10,
        word: searchParams.word,
        orderBy: searchParams.orderBy || 'recent',
      }),
    initialData,
  });
};
