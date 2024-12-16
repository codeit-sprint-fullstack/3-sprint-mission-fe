export interface GetProductListParams {
  page?: number;
  pageSize?: number;
  orderBy?: 'recent' | 'favorite';
  keyword?: string;
}

export type CreateProductRequest = Omit<GetProductResponse, 'id' | 'createdAt'>;

export interface GetProductResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  images: string[];
  ownerId: number;
  favoriteCount: number;
}

export interface GetProductListResponse {
  totalCount: number;
  list: GetProductResponse[];
}
