export interface GetArticleListParams {
  skip?: number;
  take?: number;
  orderBy?: 'recent' | 'old';
  word?: string;
}

interface Article {
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
