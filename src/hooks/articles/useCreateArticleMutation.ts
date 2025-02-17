import { createArticle } from '@/services/api/article';
import {
  CreateArticleRequest,
  GetArticleResponse,
} from '@/services/api/types/article.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useModal } from '../modals/useModal';

export const useCreateArticleMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { openMessageModal } = useModal();

  return useMutation<
    GetArticleResponse,
    AxiosError<{ message: string }>,
    CreateArticleRequest
  >({
    mutationFn: (articleRequest: CreateArticleRequest) =>
      createArticle(articleRequest),
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        queryKey: ['normalArticles', 'bestArticles'],
      });
      queryClient.setQueryData(['article', result.id.toString()], result);
      router.push(`/community/${result.id}`);
    },
    onError: (error) => {
      openMessageModal(
        error?.response?.data.message ||
          `에러가 발생했습니다. ${error.message}`,
      );
    },
  });
};
