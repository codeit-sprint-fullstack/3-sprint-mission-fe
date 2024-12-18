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
  totalCount: number;
  list: Article[];
}

export interface CreateArticleRequest {
  title: string;
  content: string;
}

export interface ArticleCommentResponse {
  list: CommentResponse[];
  nextCursor: string | null;
}

export interface CommentResponse {
  id: string;
  content: string;
  articleId: string;
  createdAt: string;
  writer: Writer;
}

interface Writer {
  image: string;
  nickname: string;
  id: string;
}

export interface ArticleCommentRequest {
  content: string;
}
