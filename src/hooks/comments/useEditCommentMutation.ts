import {
  EditOrDeleteCommentMutationParams,
  EditCommentParams,
} from '@/lib/types/params.types';
import { editComment } from '@/services/api/comment';
import { CommentListResponse } from '@/services/api/types/comment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useErrorModal } from '../modals/useErrorModal';
import { useSetAtom } from 'jotai';
import { editingCommentIdAtom } from '@/lib/store/atoms';

export const useEditCommentMutation = ({
  pageId,
  variant,
}: EditOrDeleteCommentMutationParams) => {
  const queryClient = useQueryClient();
  const { setErrorMessage } = useErrorModal();
  const setEditingCommentId = useSetAtom(editingCommentIdAtom);

  return useMutation<
    CommentListResponse,
    AxiosError<{ message: string }>,
    EditCommentParams
  >({
    mutationFn: ({ id, content }: EditCommentParams) =>
      editComment({ id, content }),
    onMutate: () => setEditingCommentId(null),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['comments', variant, pageId],
      }),
    onError: (error) =>
      setErrorMessage(
        error?.response?.data?.message ||
          `에러가 발생했습니다. ${error.message}`,
      ),
  });
};
