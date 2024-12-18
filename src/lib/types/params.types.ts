import { CommentListResponse } from '@/services/api/types/comment';

export interface CommentListParams {
  id: string;
  variant: 'product' | 'article';
}

export interface WithInitialData extends CommentListParams {
  initialData: CommentListResponse;
}

export interface CommentMutationParams {
  pageId: string;
  variant: 'product' | 'article';
}

export interface EditCommentParams {
  id: string;
  content: string;
}

export interface DeleteCommentParams {
  id: string;
}
