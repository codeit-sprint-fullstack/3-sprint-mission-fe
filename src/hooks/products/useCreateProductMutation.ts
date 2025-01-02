import { createProduct } from '@/services/api/product';
import {
  CreateProductRequest,
  GetProductResponse,
} from '@/services/api/types/product.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useMessageModal } from '../modals/useMessageModal';

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { setMessage } = useMessageModal();

  return useMutation<
    GetProductResponse,
    AxiosError<{ message: string }>,
    CreateProductRequest
  >({
    mutationFn: createProduct,
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
      queryClient.setQueryData(['product', result.id.toString()], result);
      router.push(`/items/${result.id}`);
    },
    onError: (error) => {
      setMessage(
        error?.response?.data.message ||
          `에러가 발생했습니다. ${error.message}`,
      );
    },
  });
};
