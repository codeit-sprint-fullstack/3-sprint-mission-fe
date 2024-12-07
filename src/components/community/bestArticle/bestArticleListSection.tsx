import { getArticleList } from '@/services/api/article';
import BestArticleListClient from './bestArticleListClient';

export default async function BestArticleListSection() {
  const bestArticles = await getArticleList({
    skip: 0,
    take: 3,
    orderBy: 'recent',
  });

  return <BestArticleListClient initialData={bestArticles} />;
}
