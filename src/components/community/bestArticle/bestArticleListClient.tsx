'use client';

import BestArticleCard from './bestArticleCard';
import { useAtom } from 'jotai';
import { screenWidthAtom } from '@/lib/store/atoms';
import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { useBestArticleListQuery } from '@/hooks/articles/useBestArticleListQuery';
import BestArticleSkeleton from './bestArticleSkeleton';

export default function BestArticleListClient() {
  const [screenWidth] = useAtom(screenWidthAtom);
  const { data, isLoading } = useBestArticleListQuery();

  if (isLoading) return;
  Array.from(
    { length: MEDIA_QUERY.bestArticlePageSize[screenWidth!] },
    () => 0,
  ).map((el, index) => <BestArticleSkeleton key={el + index} />);

  return (
    <>
      <span className='text-[18px] md:text-[24px] xl:text-[24px] font-extrabold mb-4 md:mb-6 xl:mb-6'>
        베스트 게시글
      </span>
      <div className='flex gap-6 mb-10'>
        {data &&
          data.list
            .slice(0, MEDIA_QUERY.bestArticlePageSize[screenWidth!])
            .map((article) => {
              return (
                <BestArticleCard
                  key={article.id}
                  nickname={article.user.nickname}
                  title={article.title}
                  likeCount={article.likeCount}
                  createdAt={article.createdAt}
                  articleId={article.id.toString()}
                />
              );
            })}
      </div>
    </>
  );
}
