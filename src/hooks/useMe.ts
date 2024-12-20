import { getMe } from '@/services/api/auth';
import { User } from '@/services/api/types/auth.types';
import { useQuery } from '@tanstack/react-query';

export const useMe = () => {
  return useQuery<User>({
    queryKey: ['me'],
    queryFn: async () => {
      const accessKey = localStorage.getItem('accessToken');
      if (!accessKey) return null;
      const userData = await getMe();
      return userData;
    },
  });
};
