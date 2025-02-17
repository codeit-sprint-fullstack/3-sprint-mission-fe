export interface GetArticleListParams {
  page?: number;
  pageSize?: number;
  orderBy?: 'recent' | 'likes';
  word?: string;
}

export interface GetArticleResponse {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  isLiked: boolean;
  image: string;
  user: ArticleWriter;
}

export interface GetArticleListResponse {
  totalCount: number;
  list: GetArticleResponse[];
}

export interface CreateArticleRequest {
  title: string;
  content: string;
}

export interface ArticleCommentRequest {
  content: string;
}

interface ArticleWriter {
  nickname: string;
  id: number;
}
