import { getArticleList } from '@/services/api/article';
import { useQuery } from '@tanstack/react-query';

export const useBestArticleListQuery = () => {
  return useQuery({
    queryKey: ['bestArticles'],
    queryFn: () =>
      getArticleList({
        page: 1,
        pageSize: 3,
        orderBy: 'recent',
      }),
  });
};
