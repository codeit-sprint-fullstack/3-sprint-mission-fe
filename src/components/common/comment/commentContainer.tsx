import { getArticleComments } from '@/services/api/article';
import { getProductComments } from '@/services/api/product';
import CommentListClient from './commentListClient';

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
    <CommentListClient
      id={id}
      initialData={comments}
      variant={variant}
    />
  );
}
