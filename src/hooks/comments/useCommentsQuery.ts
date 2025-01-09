import { CommentListParams } from '@/lib/types/params.types';
import { getArticleComments } from '@/services/api/article';
import { getProductComments } from '@/services/api/product';
import { useQuery } from '@tanstack/react-query';

export const useCommentsQuery = ({ variant, id }: CommentListParams) => {
  const queryFn = {
    product: getProductComments,
    article: getArticleComments,
  };

  return useQuery({
    queryKey: ['comments', variant, id],
    queryFn: () => queryFn[variant](parseInt(id)),
  });
};
