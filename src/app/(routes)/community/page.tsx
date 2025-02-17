import ArticleListHeader from '@/components/community/articleListHeader/articleListHeader';
import BestArticleListClient from '@/components/community/bestArticle/bestArticleListClient';
import NormalArticleListClient from '@/components/community/normalArticle/normalArticleListClient';
import SearchSection from '@/components/community/searchSection/searchSection';
import { GetArticleListParams } from '@/services/api/types/article.types';
import { createSearchParams } from '@/utils/createSearchParams';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

const getArticles = async (searchParams: GetArticleListParams) => {
  const params = createSearchParams(searchParams);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles?${params}`,
  );
  const data = await response.json();

  return data;
};

export default async function Page({
  searchParams,
}: {
  searchParams: GetArticleListParams;
}) {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ['articles', ...Object.values(searchParams)],
    queryFn: async () => await getArticles(searchParams),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
        <BestArticleListClient />
        <ArticleListHeader />
        <SearchSection />
        <NormalArticleListClient searchParams={searchParams} />
      </div>
    </HydrationBoundary>
  );
}
