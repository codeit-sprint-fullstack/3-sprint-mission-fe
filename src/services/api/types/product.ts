export interface GetProductListParams {
  skip?: number;
  take?: number;
  orderBy?: 'recent' | 'likes';
  word?: string;
}

export type CreateProductRequest = Omit<GetProductResponse, 'id' | 'createdAt'>;

export interface GetProductResponse {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  createdAt: string;
}

export interface GetProductListResponse {
  count: number;
  data: GetProductResponse[];
}
