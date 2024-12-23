import {
  GetProductListParams,
  GetProductListResponse,
} from '@/services/api/types/product.types';

export interface ProductProps {
  id: number;
  images: string[];
  title: string;
  price: number;
  likes: number;
  size: 'big' | 'small';
}

export interface BestProductListClientProps {
  initialData: GetProductListResponse;
}

export interface NormalProductListClientProps {
  searchParams: GetProductListParams;
}
