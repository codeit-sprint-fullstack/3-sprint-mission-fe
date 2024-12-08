import {
  GetProductListParams,
  GetProductListResponse,
  GetProductResponse,
} from '@/services/api/types/product';

export interface ProductProps {
  image: string;
  title: string;
  price: number;
  likes: number;
  size: 'big' | 'small';
}

export interface BestProductSectionProps {
  initialData: GetProductListResponse;
}

export interface NormalProductListClientProps {
  searchParams: GetProductListParams;
  initialData: GetProductListResponse;
}

export type NormalProductListSectionProps = Omit<
  NormalProductListClientProps,
  'initialData'
>;
