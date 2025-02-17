import { updateArticle } from '@/services/api/article';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import {
  CreateArticleRequest,
  GetArticleResponse,
} from '@/services/api/types/article.types';
import { useModal } from '../modals/useModal';

export const useEditArticleMutation = (id: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { openMessageModal } = useModal();

  return useMutation<
    GetArticleResponse,
    AxiosError<{ message: string }>,
    Partial<CreateArticleRequest>
  >({
    mutationFn: (article: Partial<CreateArticleRequest>) =>
      updateArticle(id, article),
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        queryKey: ['bestArticles', 'normalArticles'],
      });
      queryClient.setQueryData(['article', result.id.toString()], result);
      router.push(`/community/${result.id}`);
    },
    onError: (error) =>
      openMessageModal(
        error?.response?.data.message ||
          `에러가 발생했습니다. ${error.message}`,
      ),
  });
};
