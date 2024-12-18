import {
  CommentMutationParams,
  EditCommentParams,
} from '@/lib/types/params.types';
import { editComment } from '@/services/api/comment';
import { CommentListResponse } from '@/services/api/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useEditCommentMutation = ({
  pageId,
  variant,
}: CommentMutationParams) => {
  const queryClient = useQueryClient();

  return useMutation<
    CommentListResponse,
    AxiosError<{ message: string }>,
    EditCommentParams
  >({
    mutationFn: ({ id, content }: EditCommentParams) =>
      editComment({ id, content }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['comments', variant, pageId],
      }),
  });
};
