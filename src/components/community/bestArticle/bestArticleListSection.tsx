import { getArticleList } from '@/services/api/article';
import BestArticleListClient from './bestArticleListClient';

export default async function BestArticleListSection() {
  const bestArticles = await getArticleList({
    skip: 0,
    take: 3,
    orderBy: 'recent',
  });

  return (
    <>
      <span className='text-[18px] md:text-[24px] xl:text-[24px] font-extrabold mb-4 md:mb-6 xl:mb-6'>
        베스트 게시글
      </span>
      <div className='flex gap-6 mb-10'>
        <BestArticleListClient initialData={bestArticles} />
      </div>
    </>
  );
}
