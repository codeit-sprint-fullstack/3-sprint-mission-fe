import { deleteProduct } from '@/services/api/product';
import { GetProductResponse } from '@/services/api/types/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export const useDeleteProductMutation = ({
  onMutateFn,
  onErrorFn,
}: {
  onMutateFn: () => void;
  onErrorFn: (errorMessage: string) => void;
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError<{ message: string }>, string>({
    mutationFn: deleteProduct,
    onMutate: onMutateFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      router.push('/items');
    },
    onError: (error) => onErrorFn(error?.response?.data.message || ''),
  });
};
