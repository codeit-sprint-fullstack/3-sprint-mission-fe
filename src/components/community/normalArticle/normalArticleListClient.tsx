'use client';

import NormalArticleCard from './normalArticleCard';
import { useNormalArticleListQuery } from '@/hooks/articles/useNormalArticleListQuery';
import { NormalArticleListProps } from '@/lib/types/props.types';

export default function NormalArticleListClient({
  searchParams,
  initialData,
}: NormalArticleListProps) {
  const { data } = useNormalArticleListQuery({ searchParams, initialData });

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
