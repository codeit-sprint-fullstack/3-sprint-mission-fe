import { modalAtom } from '@/lib/store/modalAtoms';
import { useAtom } from 'jotai';

export const useModal = () => {
  const [{ isOpen, modalType, message, onButtonClick }, setModalState] =
    useAtom(modalAtom);

  const openMessageModal = (message: string, onButtonClick?: () => void) => {
    setModalState((value) => ({
      ...value,
      onButtonClick: onButtonClick ?? null,
      modalType: 'message',
      isOpen: true,
      message,
    }));
  };

  const openConfirmModal = (message: string, onButtonClick: () => void) => {
    setModalState({
      modalType: 'confirm',
      isOpen: true,
      message,
      onButtonClick: onButtonClick ?? null,
    });
  };

  const closeModal = () => {
    setModalState({
      modalType: null,
      isOpen: false,
      onButtonClick: null,
      message: '',
    });
  };

  return {
    isOpen,
    modalType,
    message,
    onButtonClick,
    openMessageModal,
    openConfirmModal,
    closeModal,
  };
};
