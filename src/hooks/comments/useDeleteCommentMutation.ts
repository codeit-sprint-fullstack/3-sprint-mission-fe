import {
  EditOrDeleteCommentMutationParams,
  DeleteCommentParams,
} from '@/lib/types/params.types';
import { deleteComment } from '@/services/api/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useErrorModal } from '../modals/useErrorModal';

export const useDeleteCommentMutation = ({
  pageId,
  variant,
}: EditOrDeleteCommentMutationParams) => {
  const queryClient = useQueryClient();
  const { setErrorMessage } = useErrorModal();

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
    onError: (error) => {
      setErrorMessage(
        error?.response?.data?.message ||
          `에러가 발생했습니다. ${error.message}`,
      );
    },
  });
};
