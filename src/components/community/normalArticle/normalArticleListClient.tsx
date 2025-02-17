'use client';

import NormalArticleCard from './normalArticleCard';
import { useNormalArticleListQuery } from '@/hooks/articles/useNormalArticleListQuery';
import { NormalArticleListProps } from '@/lib/types/props.types';
import NormalArticleCardSkeleton from './normalArticleSkeleton';

export default function NormalArticleListClient({
  searchParams,
}: NormalArticleListProps) {
  const { data, isLoading } = useNormalArticleListQuery({
    searchParams,
  });

  if (isLoading)
    return Array.from({ length: 10 }, () => 0).map((el, index) => (
      <NormalArticleCardSkeleton key={el + index} />
    ));

  console.log(data?.list);

  return (
    <div className='flex flex-col gap-6'>
      {data &&
        !isLoading &&
        data.list.map((article) => (
          <NormalArticleCard
            key={article.id}
            nickname={article.user.nickname}
            title={article.title}
            likeCount={article.likeCount}
            createdAt={article.createdAt}
            articleId={article.id.toString()}
          />
        ))}
    </div>
  );
}
