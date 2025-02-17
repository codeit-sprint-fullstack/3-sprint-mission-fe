import { deleteProduct } from '@/services/api/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useModal } from '../modals/useModal';

export const useDeleteProductMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { openMessageModal } = useModal();

  return useMutation<void, AxiosError<{ message: string }>, string>({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      router.push('/items');
    },
    onError: (error) =>
      openMessageModal(
        error?.response?.data.message ||
          `에러가 발생했습니다. ${error.message}`,
      ),
  });
};
