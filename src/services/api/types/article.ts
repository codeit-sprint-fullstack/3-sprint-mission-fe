export interface GetArticleListParams {
  skip?: number;
  take?: number;
  orderBy?: 'recent' | 'likes';
  word?: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetArticleListResponse {
  count: number;
  data: Article[];
}

export interface CreateArticleRequest {
  title: string;
  content: string;
}

export interface ArticleCommentResponse {
  data: CommentResponse[];
  hasNext: boolean;
  nextCursor: string | null;
}

export interface CommentResponse {
  id: string;
  content: string;
  articleId: string;
  createdAt: string;
}

export interface ArticleCommentRequest {
  content: string;
}
