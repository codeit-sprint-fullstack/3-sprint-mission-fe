import {
  GetProductListParams,
  GetProductListResponse,
} from '@/services/api/types/product';

export interface ProductProps {
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
  initialData: GetProductListResponse;
}

export type NormalProductListSectionProps = Omit<
  NormalProductListClientProps,
  'initialData'
>;
