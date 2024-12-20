'use client';

import { getArticleList } from '@/services/api/article';
import { GetArticleListResponse } from '@/services/api/types/article';
import { useQuery } from '@tanstack/react-query';
import BestArticleCard from './bestArticleCard';
import { useAtom } from 'jotai';
import { screenWidthAtom } from '@/lib/store/atoms';
import { MEDIA_QUERY } from '@/constants/mediaQuery';

export default function BestArticleListClient({
  initialData,
}: {
  initialData: GetArticleListResponse;
}) {
  const [screenWidth] = useAtom(screenWidthAtom);
  const { data } = useQuery({
    queryKey: ['bestArticles'],
    queryFn: () =>
      getArticleList({
        skip: 0,
        take: 3,
        orderBy: 'recent',
      }),
    initialData,
  });

  return (
    <>
      {data.list
        .slice(0, MEDIA_QUERY.bestArticlePageSize[screenWidth!])
        .map((article) => {
          return (
            <BestArticleCard
              key={article.id}
              nickname={article.writer.nickname}
              title={article.title}
              likeCount={article.likeCount}
              createdAt={article.createdAt}
              articleId={article.id.toString()}
            />
          );
        })}
    </>
  );
}
