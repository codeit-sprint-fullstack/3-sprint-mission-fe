import { deleteProductFavorite } from '@/services/api/product';
import { GetProductResponse } from '@/services/api/types/product.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ProductContextType } from './types';

export const useDeleteProductFavoriteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    GetProductResponse,
    AxiosError<{ message: string }>,
    string,
    ProductContextType
  >({
    mutationFn: (id: string) => deleteProductFavorite(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['product', id] });
      const previousProduct = queryClient.getQueryData<GetProductResponse>([
        'product',
        id,
      ]);

      queryClient.setQueryData<GetProductResponse>(['product', id], (prev) => {
        const newProduct = {
          ...prev,
          isFavorite: false,
          favoriteCount: prev!.favoriteCount - 1,
        } as GetProductResponse;
        return newProduct;
      });

      return { previousProduct };
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
    onError: (_, id, context) => {
      queryClient.setQueryData(['product', id], context?.previousProduct);
    },
  });
};
