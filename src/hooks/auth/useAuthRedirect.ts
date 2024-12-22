import { useRouter } from 'next/router';
import { useMe } from '../useMe';
import { useMessageModal } from '../modals/useMessageModal';

export const useAuthRedirect = () => {
  const me = useMe();
  const router = useRouter();
  const { setMessage } = useMessageModal();

  const authRedirect = (pathname: string) => {
    if (me) return router.push(pathname);
    setMessage('로그인이 필요한 기능입니다.');
  };

  return { authRedirect };
};
