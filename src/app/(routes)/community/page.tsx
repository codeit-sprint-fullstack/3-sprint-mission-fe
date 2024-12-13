import ArticleListHeader from '@/components/community/articleListHeader/articleListHeader';
import BestArticleListSection from '@/components/community/bestArticle/bestArticleListSection';
import NormalArticleListSection from '@/components/community/normalArticle/normalArticleListSection';
import SearchSection from '@/components/community/searchSection/searchSection';
import { GetArticleListParams } from '@/services/api/types/article';

export default function Page({
  searchParams,
}: {
  searchParams: GetArticleListParams;
}) {
  return (
    <div className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
      <BestArticleListSection />
      <ArticleListHeader />
      <SearchSection />
      <NormalArticleListSection searchParams={searchParams} />
    </div>
  );
}
