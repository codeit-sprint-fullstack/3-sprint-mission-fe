import { getMe, refreshToken } from '@/services/api/auth';
import { User } from '@/services/api/types/auth.types';
import { useQuery } from '@tanstack/react-query';

export const useMe = () => {
  return useQuery<User>({
    queryKey: ['me'],
    queryFn: async () => {
      const userData = await getMe();
      if (userData === null)
        try {
          await refreshToken();
          const userData = await getMe();
          return userData;
        } catch {}
      return userData;
    },
  });
};
