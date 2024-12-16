import { getMe } from '@/services/api/auth';
import { useQuery } from '@tanstack/react-query';

export const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const accessKey = localStorage.getItem('accessToken');
      if (!accessKey) return null;
      const userData = await getMe();
      return userData;
    },
  });
};
