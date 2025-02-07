export type Comment = {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
};

export type CommentCreateRequest = {
  content: string;
};

export type CommentCreateResponse = Comment;

export type CommentListResponse = {
  nextCursor: number;
  list: Comment[];
};

export type CommentDeleteResponse = {
  id: number;
};
