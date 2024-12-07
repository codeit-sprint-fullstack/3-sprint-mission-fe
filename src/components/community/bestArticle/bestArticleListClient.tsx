'use client';

import { getArticleList } from '@/services/api/article';
import { GetArticleListResponse } from '@/services/types/article';
import { useQuery } from '@tanstack/react-query';
import BestArticleCard from './bestArticleCard';

export default function BestArticleListClient({
  initialData,
}: {
  initialData: GetArticleListResponse;
}) {
  const { data } = useQuery({
    queryKey: ['bestArticles'],
    queryFn: () => getArticleList({ skip: 0, take: 3, orderBy: 'recent' }),
    initialData,
  });

  return (
    <>
      {data.data.map((article) => {
        return (
          <BestArticleCard
            key={article.id}
            nickname='총명한 판다'
            title={article.title}
            likes={999}
            createdAt={article.createdAt}
            articleId={article.id}
          />
        );
      })}
    </>
  );
}
