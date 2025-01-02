import { getArticleComments } from '@/services/api/article';
import { getProductComments } from '@/services/api/product';
import CommentListClient from './commentListClient';
import { Suspense } from 'react';
import CommentSkeletonList from './commentSkeletonList';
import CommentForm from '../commentForm/commentForm';
import NoComment from './noComment';

export default async function CommentContainer({
  id,
  variant,
}: {
  id: string;
  variant: 'article' | 'product';
}) {
  const commentFn = {
    article: getArticleComments,
    product: getProductComments,
  };

  const comments = await commentFn[variant](id);

  return (
    <>
      <CommentForm
        id={id}
        variant={variant}
      />
      <Suspense fallback={<CommentSkeletonList />}>
        <CommentListClient
          id={id}
          initialData={comments}
          variant={variant}
        />
      </Suspense>
      {comments.list.length <= 0 && <NoComment variant={variant} />}
    </>
  );
}
