import { errorModalAtom } from '@/lib/store/modalAtoms';
import { useAtom } from 'jotai';

export const useErrorModal = () => {
  const [errorModalState, setErrorModalState] = useAtom(errorModalAtom);

  const setErrorMessage = (message: string) => {
    setErrorModalState({
      isOpen: true,
      message,
    });
  };

  const closeErrorModal = () => {
    setErrorModalState({
      isOpen: false,
      message: '',
    });
  };

  return { errorModalState, setErrorMessage, closeErrorModal };
};
