import { deleteArticle } from '@/services/api/article';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useMessageModal } from '../modals/useMessageModal';
import { AxiosError } from 'axios';

export const useDeleteArticleMutation = (id: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { setMessage } = useMessageModal();

  return useMutation<void, AxiosError<{ message: string }>, string>({
    mutationFn: () => deleteArticle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['bestArticles', 'normalArticles'],
      });
      router.push('/community');
    },
    onError: (error) =>
      setMessage(
        error?.response?.data.message ||
          `에러가 발생했습니다. ${error.message}`,
      ),
  });
};
