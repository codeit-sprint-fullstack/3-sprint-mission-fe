import {
  EditOrDeleteCommentMutationParams,
  EditCommentParams,
} from '@/lib/types/params.types';
import { editComment } from '@/services/api/comment';
import { CommentListResponse } from '@/services/api/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useEditCommentMutation = ({
  pageId,
  variant,
  onErrorFn,
}: EditOrDeleteCommentMutationParams) => {
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
    onError: (error) =>
      onErrorFn(
        error.response?.data.message || `에러가 발생했습니다. ${error.message}`,
      ),
  });
};
