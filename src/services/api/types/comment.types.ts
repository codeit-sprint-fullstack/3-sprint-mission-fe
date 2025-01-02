export interface CommentListResponse {
  list: CommentResponse[];
  nextCursor: string | null;
}

export interface CommentResponse {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface CommentRequest {
  id: string;
  content: string;
}

interface Writer {
  image: string;
  nickname: string;
  id: string;
}
