import { messageModalAtom } from '@/lib/store/modalAtoms';
import { useAtom } from 'jotai';

export const useMessageModal = () => {
  const [messageModalState, setMessageModalState] = useAtom(messageModalAtom);

  const setMessage = (
    message: string,
    onCloseFunction: (() => void) | null = null,
  ) => {
    setMessageModalState({
      isOpen: true,
      message,
      onCloseFunction,
    });
  };

  const closeMessageModal = () => {
    if (messageModalState.onCloseFunction) messageModalState.onCloseFunction();
    setMessageModalState({
      isOpen: false,
      message: '',
      onCloseFunction: null,
    });
  };

  return {
    messageModalState,
    setMessage,
    closeMessageModal,
  };
};
