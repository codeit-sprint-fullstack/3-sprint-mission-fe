import { SignInResponse } from '@/services/api/types/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useAuthMutation = <T>(
  authFn: (data: T) => Promise<SignInResponse>,
) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authFn,
    onSuccess: (response) => {
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      queryClient.setQueriesData({ queryKey: ['me'] }, response.user);
      router.push('/items');
    },
  });
};
