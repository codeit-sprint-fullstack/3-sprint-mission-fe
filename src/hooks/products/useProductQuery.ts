import { getProduct } from '@/services/api/product';
import { GetProductResponse } from '@/services/api/types/product.types';
import { useQuery } from '@tanstack/react-query';

export const useProductQuery = ({ id }: { id: string }) => {
  return useQuery<GetProductResponse>({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  });
};
