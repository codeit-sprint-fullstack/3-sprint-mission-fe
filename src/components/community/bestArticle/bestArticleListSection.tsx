import { getArticleList } from '@/services/api/article';
import BestArticleCard from './bestArticleCard';

export default async function BestArticleListSection() {
  const { data: bestArticles } = await getArticleList({
    skip: 0,
    take: 3,
    orderBy: 'recent',
  });

  return (
    <>
      {bestArticles.map((article) => {
        return (
          <BestArticleCard
            key={article.id}
            nickname='총명한 판다'
            content={article.content}
            likes={999}
            createdAt={article.createdAt}
            articleId={article.id}
          />
        );
      })}
    </>
  );
}
