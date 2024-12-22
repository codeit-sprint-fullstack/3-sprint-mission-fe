import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useErrorModal } from '../modals/useErrorModal';
import { AxiosError } from 'axios';
import {
  CreateProductRequest,
  GetProductResponse,
} from '@/services/api/types/product.types';
import { updateProduct } from '@/services/api/product';

export const useEditProductMutation = (id: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { setErrorMessage } = useErrorModal();

  return useMutation<
    GetProductResponse,
    AxiosError<{ message: string }>,
    Partial<CreateProductRequest>
  >({
    mutationFn: (product: Partial<CreateProductRequest>) =>
      updateProduct(id, product),
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
      queryClient.setQueryData(['product', result.id.toString()], result);
      router.push(`/items/${result.id}`);
    },
    onError: (error) =>
      setErrorMessage(
        error?.response?.data.message ||
          `에러가 발생했습니다. ${error.message}`,
      ),
  });
};
