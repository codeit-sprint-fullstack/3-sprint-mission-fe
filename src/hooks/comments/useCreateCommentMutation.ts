import { CommentListParams } from '@/lib/types/params.types';
import { createArticleComments } from '@/services/api/article';
import { createProductComments } from '@/services/api/product';
import {
  CommentRequest,
  CommentResponse,
} from '@/services/api/types/comment.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useCreateCommentMutation = ({
  variant,
  id,
}: CommentListParams) => {
  const queryClient = useQueryClient();
  const mutationFn = {
    product: createProductComments,
    article: createArticleComments,
  };

  return useMutation<
    CommentResponse,
    AxiosError<{ message: string }>,
    CommentRequest
  >({
    mutationFn: mutationFn[variant],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', variant, id] });
    },
  });
};
