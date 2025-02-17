'use client';

import ArticleHeader from './articleHeader';
import { useArticleQuery } from '@/hooks/articles/useArticleQuery';

export default function ArticleClient({ id }: { id: string }) {
  const { data: article } = useArticleQuery(id);

  if (!article) return null;

  return (
    <>
      <ArticleHeader
        ownerId={article.user.id}
        id={article.id.toString()}
        nickname={article.user.nickname}
        title={article.title}
        createdAt={article.createdAt}
        likeCount={article.likeCount}
        isLiked={article.isLiked}
      />
      <div className='mb-8'>{article.content}</div>
    </>
  );
}
