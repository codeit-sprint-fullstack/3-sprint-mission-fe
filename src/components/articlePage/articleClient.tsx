'use client';

import { Article } from '@/services/api/types/article';
import ArticleHeader from './articleHeader';
import { useQuery } from '@tanstack/react-query';
import { getArticle } from '@/services/api/article';

export default function ArticleClient({
  initialData,
}: {
  initialData: Article;
}) {
  const { data: article } = useQuery({
    queryKey: ['article', initialData.id],
    queryFn: () => getArticle(initialData.id),
    initialData,
  });

  return (
    <>
      <ArticleHeader
        id={article.id}
        // 이후 닉네임 입력 예정
        nickname='판다'
        title={article.title}
        createdAt={article.createdAt}
      />
      <div className='mb-8'>{article.content}</div>
    </>
  );
}
