import { getArticleList } from '@/services/api/article';
import NormalArticleListClient from './normalArticleListClient';
import { GetArticleListParams } from '@/services/api/types/article';

export default async function NormalArticleListSection({
  searchParams,
}: {
  searchParams: GetArticleListParams;
}) {
  const articleList = await getArticleList({
    skip: Number(searchParams.skip) || 0,
    take: Number(searchParams.take) || 10,
    word: searchParams.word,
    orderBy: searchParams.orderBy || 'recent',
  });

  return (
    <>
      <div className='flex flex-col gap-6'>
        <NormalArticleListClient
          searchParams={searchParams}
          initialData={articleList}
        />
      </div>
    </>
  );
}
