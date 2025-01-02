import axiosInstance from '@/lib/axios/axiosInstance';
import { CommentListResponse, CommentRequest } from './types/comment.types';

export const editComment = async ({ id, content }: CommentRequest) => {
  const { data } = await axiosInstance.patch<CommentListResponse>(
    `/comments/${id}`,
    {
      content,
    },
  );
  return data;
};

export const deleteComment = async (id: string) => {
  await axiosInstance.delete(`/comments/${id}`);
};
