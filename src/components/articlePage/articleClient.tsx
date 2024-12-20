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
    queryFn: () => getArticle(initialData.id.toString()),
    initialData,
  });

  return (
    <>
      <ArticleHeader
        id={article.id.toString()}
        nickname={article.writer.nickname}
        title={article.title}
        createdAt={article.createdAt}
        likeCount={article.likeCount}
        isLiked={article.isLiked}
      />
      <div className='mb-8'>{article.content}</div>
    </>
  );
}
