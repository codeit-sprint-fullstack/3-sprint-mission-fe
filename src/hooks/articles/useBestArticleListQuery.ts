import { BestArticleListProps } from '@/lib/types/props.types';
import { getArticleList } from '@/services/api/article';
import { useQuery } from '@tanstack/react-query';

export const useBestArticleListQuery = ({
  initialData,
}: BestArticleListProps) => {
  return useQuery({
    queryKey: ['bestArticles'],
    queryFn: () =>
      getArticleList({
        skip: 0,
        take: 3,
        orderBy: 'recent',
      }),
    initialData,
  });
};
