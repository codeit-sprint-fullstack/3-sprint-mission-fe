import {
  EditOrDeleteCommentMutationParams,
  DeleteCommentParams,
} from '@/lib/types/params.types';
import { deleteComment } from '@/services/api/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useMessageModal } from '../modals/useMessageModal';

export const useDeleteCommentMutation = ({
  pageId,
  variant,
}: EditOrDeleteCommentMutationParams) => {
  const queryClient = useQueryClient();
  const { setMessage } = useMessageModal();

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
      setMessage(
        error?.response?.data?.message ||
          `에러가 발생했습니다. ${error.message}`,
      );
    },
  });
};
