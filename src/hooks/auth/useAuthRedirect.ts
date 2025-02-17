import { useRouter } from 'next/navigation';
import { useMe } from '../useMe';
import { useModal } from '../modals/useModal';

export const useAuthRedirect = () => {
  const me = useMe();
  const router = useRouter();
  const { openMessageModal } = useModal();

  const authRedirect = (pathname: string) => {
    if (me) return router.push(pathname);
    openMessageModal('로그인이 필요한 기능입니다.');
  };

  return { authRedirect };
};
