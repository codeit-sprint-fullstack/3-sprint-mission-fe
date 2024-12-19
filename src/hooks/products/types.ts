import { GetProductResponse } from '@/services/api/types/product';

export interface ProductContextType {
  previousProduct: GetProductResponse | undefined;
}
