'use client';

import { getArticleList } from '@/services/api/article';
import {
  GetArticleListParams,
  GetArticleListResponse,
} from '@/services/api/types/article';
import { useQuery } from '@tanstack/react-query';
import NormalArticleCard from './normalArticleCard';

export default function NormalArticleListClient({
  searchParams,
  initialData,
}: {
  searchParams: GetArticleListParams;
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
      {data.list.map((article) => (
        <NormalArticleCard
          key={article.id}
          nickname={article.writer.nickname}
          title={article.title}
          likeCount={article.likeCount}
          createdAt={article.createdAt}
          articleId={article.id.toString()}
        />
      ))}
    </>
  );
}
