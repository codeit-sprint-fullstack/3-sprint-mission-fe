import { deleteProduct } from '@/services/api/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useMessageModal } from '../modals/useMessageModal';

export const useDeleteProductMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setMessage: setErrorMessage } = useMessageModal();

  return useMutation<void, AxiosError<{ message: string }>, string>({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      router.push('/items');
    },
    onError: (error) =>
      setErrorMessage(
        error?.response?.data.message ||
          `에러가 발생했습니다. ${error.message}`,
      ),
  });
};
