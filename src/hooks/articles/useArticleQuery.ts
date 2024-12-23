import { getArticle } from '@/services/api/article';
import { useQuery } from '@tanstack/react-query';

export const useArticleQuery = (id: string) => {
  return useQuery({
    queryKey: ['article', id.toString()],
    queryFn: () => getArticle(id.toString()),
  });
};
