import axiosInstance from '@/lib/axios/axiosInstance';
import { CommentResponse } from './types/article';

export const editComment = async (id: string, content: string) => {
  const editedComment = await axiosInstance.patch<CommentResponse>(
    `/comments/${id}`,
    {
      content,
    },
  );
  return editedComment;
};

export const deleteComment = async (id: string) => {
  await axiosInstance.delete(`/comments/${id}`);
};
