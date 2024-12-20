'use client';

import ArticleHeader from './articleHeader';
import { useArticleQuery } from '@/hooks/articles/useArticleQuery';

export default function ArticleClient({ id }: { id: string }) {
  const { data: article } = useArticleQuery(id);

  return (
    article && (
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
    )
  );
}
