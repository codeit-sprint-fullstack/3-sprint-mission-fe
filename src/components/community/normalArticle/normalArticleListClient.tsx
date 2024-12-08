'use client';

import { SearchParams } from '@/lib/types/searchParams.types';
import { getArticleList } from '@/services/api/article';
import { GetArticleListResponse } from '@/services/types/article';
import { useQuery } from '@tanstack/react-query';
import NormalArticleCard from './normalArticleCard';

export default function NormalArticleListClient({
  searchParams,
  initialData,
}: {
  searchParams: SearchParams;
  initialData: GetArticleListResponse;
}) {
  const { data } = useQuery({
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

  return (
    <>
      {data.data.map((article) => (
        <NormalArticleCard
          key={article.id}
          nickname='총명한 판다'
          title={article.title}
          likes={99}
          createdAt={article.createdAt}
          articleId={article.id}
        />
      ))}
    </>
  );
}
