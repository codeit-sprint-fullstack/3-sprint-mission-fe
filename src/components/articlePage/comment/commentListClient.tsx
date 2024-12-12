'use client';

import { ArticleCommentResponse } from '@/services/api/types/article';
import CommentForm from '@/components/articlePage/commentForm/commentForm';
import { useQuery } from '@tanstack/react-query';
import { getArticleComments } from '@/services/api/article';
import CommentContainer from './commentContainer';
import NoComment from './noComment';

export default function CommentListClient({
  articleId,
  initialData,
}: {
  articleId: string;
  initialData: ArticleCommentResponse;
}) {
  const { data: comments } = useQuery({
    queryKey: ['comments', articleId],
    queryFn: () => getArticleComments(articleId),
    initialData,
  });

  return (
    <>
      <CommentForm articleId={articleId} />
      {comments.data.length > 0 ? (
        <CommentContainer data={comments.data} />
      ) : (
        <NoComment />
      )}
    </>
  );
}
