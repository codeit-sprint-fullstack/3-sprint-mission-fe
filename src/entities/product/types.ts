export interface Product {
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
}

type OrderBy = 'recent' | 'favorite';

export interface ProductsParams {
  page?: number;
  pageSize?: number;
  orderBy?: OrderBy;
  keyword?: string;
}

export interface ProductsResponse {
  totalCount: number;
  list: {
    createdAt: string;
    favoriteCount: number;
    ownerNickname: string;
    ownerId: number;
    images: string[];
    tags: string[];
    price: number;
    description: string;
    name: string;
    id: number;
    isFavorite: boolean;
  }[];
}
