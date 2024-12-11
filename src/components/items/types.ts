import {
  GetProductListParams,
  GetProductListResponse,
} from '@/services/api/types/product';

export interface ProductProps {
  id: string;
  image: string;
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
