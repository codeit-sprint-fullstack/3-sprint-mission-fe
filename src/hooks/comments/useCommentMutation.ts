import {
  DeleteCommentParams,
  EditCommentParams,
  EditOrDeleteCommentMutationParams,
} from '@/lib/types/params.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { editingCommentIdAtom } from '@/lib/store/atoms';
import { CommentListResponse } from '@/services/api/types/comment.types';
import { AxiosError } from 'axios';
import { deleteComment, editComment } from '@/services/api/comment';
import { useModal } from '../modals/useModal';

export const useCommentMutation = ({
  pageId,
  variant,
}: EditOrDeleteCommentMutationParams) => {
  const queryClient = useQueryClient();
  const { openMessageModal } = useModal();
  const setEditingCommentId = useSetAtom(editingCommentIdAtom);

  const editMutation = useMutation<
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
      openMessageModal(
        error?.response?.data?.message ||
          `에러가 발생했습니다. ${error.message}`,
      ),
  });

  const deleteMutation = useMutation<
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
      openMessageModal(
        error?.response?.data?.message ||
          `에러가 발생했습니다. ${error.message}`,
      );
    },
  });

  return { editMutation, deleteMutation };
};
