import { GetProductResponse } from '@/services/api/types/product.types';

export interface ProductContextType {
  previousProduct: GetProductResponse | undefined;
}
