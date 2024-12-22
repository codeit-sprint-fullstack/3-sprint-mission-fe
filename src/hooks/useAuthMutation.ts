import { SignInResponse } from '@/services/api/types/auth.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useMessageModal } from './modals/useMessageModal';

export const useAuthMutation = <T>(
  authFn: (data: T) => Promise<SignInResponse>,
) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setMessage } = useMessageModal();

  return useMutation<SignInResponse, AxiosError<{ message: string }>, T>({
    mutationFn: authFn,
    onSuccess: (response) => {
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      queryClient.setQueriesData({ queryKey: ['me'] }, response.user);
      router.push('/items');
    },
    onError: (error) => {
      setMessage(error?.response?.data.message || '오류가 발생했습니다.');
    },
  });
};
