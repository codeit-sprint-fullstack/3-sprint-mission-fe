export interface GetProductListParams {
  page?: number;
  pageSize?: number;
  orderBy?: 'recent' | 'favorite';
  word?: string;
}

export interface CreateProductRequest {
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
}

export interface User {
  nickname: string;
  image: string;
  id: number;
}

export interface GetProductResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  createdAt: string;
  images: string[];
  user: User;
  favoriteCount: number;
  isFavorite: boolean;
}

export interface GetProductListResponse {
  totalCount: number;
  list: GetProductResponse[];
}
