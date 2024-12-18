import {
  CommentMutationParams,
  DeleteCommentParams,
} from '@/lib/types/params.types';
import { deleteComment } from '@/services/api/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useDeleteCommentMutation = ({
  pageId,
  variant,
}: CommentMutationParams) => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    AxiosError<{ message: string }>,
    DeleteCommentParams
  >({
    mutationFn: ({ id }: DeleteCommentParams) => deleteComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments', variant, pageId],
      });
    },
  });
};
