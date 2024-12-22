import { messageModalAtom } from '@/lib/store/modalAtoms';
import { useAtom } from 'jotai';

export const useMessageModal = () => {
  const [messageModalState, setMessageModalState] = useAtom(messageModalAtom);

  const setMessage = (message: string) => {
    setMessageModalState({
      isOpen: true,
      message,
    });
  };

  const closeMessageModal = () => {
    setMessageModalState({
      isOpen: false,
      message: '',
    });
  };

  return {
    messageModalState,
    setMessage,
    closeMessageModal,
  };
};
