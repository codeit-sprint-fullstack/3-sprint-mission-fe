import api from "@/lib/axios";
import {
  Comment,
  CommentCreateRequest,
  CommentDeleteResponse,
  CommentListResponse,
} from "@/types/comments";

export const createComment = async (productId: number, content: string) => {
  const response = await api.post<Comment>(`/products/${productId}/comments`, {
    content,
  });
  return response.data;
};

export const getComments = async (
  productId: number,
  limit: number,
  cursor: number,
) => {
  const response = await api.get<CommentListResponse>(
    `/products/${productId}/comments?limit=${limit}&cursor=${cursor}`,
  );
  return response.data;
};

export const updateComment = async (commentId: number, content: string) => {
  const response = await api.patch<CommentCreateRequest>(
    `/comments/${commentId}`,
    { content },
  );
  return response.data;
};

export const deleteComment = async (commentId: number) => {
  const response = await api.delete<CommentDeleteResponse>(
    `/comments/${commentId}`,
  );
  return response.data;
};
