'use client';

import NormalArticleCard from './normalArticleCard';
import { useNormalArticleListQuery } from '@/hooks/articles/useNormalArticleListQuery';
import { NormalArticleListProps } from '@/lib/types/props.types';
import NormalArticleCardSkeleton from './normalArticleSkeleton';

export default function NormalArticleListClient({
  searchParams,
  initialData,
}: NormalArticleListProps) {
  const { data, isLoading } = useNormalArticleListQuery({
    searchParams,
    initialData,
  });

  if (isLoading)
    return Array.from({ length: 10 }, (_, index) => index).map((_) => (
      <NormalArticleCardSkeleton />
    ));

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
