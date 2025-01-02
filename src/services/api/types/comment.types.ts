export interface CommentListResponse {
  list: CommentResponse[];
  nextCursor: string | null;
}

export interface CommentResponse {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: user;
}

export interface CommentRequest {
  id: string;
  content: string;
}

interface user {
  image: string;
  nickname: string;
  id: string;
}
