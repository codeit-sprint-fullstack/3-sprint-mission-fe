import { SearchParams } from '@/lib/types/searchParams.types';
import { getArticleList } from '@/services/api/article';
import NormalArticleListClient from './normalArticleListClient';

export default async function NormalArticleListSection({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const articleList = await getArticleList({
    skip: Number(searchParams.skip) || 0,
    take: Number(searchParams.take) || 10,
    word: searchParams.word,
    orderBy: searchParams.orderBy || 'recent',
  });

  return (
    <NormalArticleListClient
      searchParams={searchParams}
      initialData={articleList}
    />
  );
}
