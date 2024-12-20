'use client';

import BestArticleCard from './bestArticleCard';
import { useAtom } from 'jotai';
import { screenWidthAtom } from '@/lib/store/atoms';
import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { useBestArticleListQuery } from '@/hooks/articles/useBestArticleListQuery';
import { BestArticleListProps } from '@/lib/types/props.types';

export default function BestArticleListClient({
  initialData,
}: BestArticleListProps) {
  const [screenWidth] = useAtom(screenWidthAtom);
  const { data } = useBestArticleListQuery({ initialData });

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
