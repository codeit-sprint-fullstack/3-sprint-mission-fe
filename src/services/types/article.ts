export interface GetArticleListParams {
  skip?: number;
  take?: number;
  orderBy?: 'recent' | 'old';
  word?: string;
}

export interface Article {
  id: number;
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
