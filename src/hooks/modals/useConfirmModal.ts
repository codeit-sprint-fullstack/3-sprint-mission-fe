import { confirmModalAtom } from '@/lib/store/modalAtoms';
import { useAtom } from 'jotai';

export const useConfirmModal = () => {
  const [{ isOpen, message, onConfirmFunction }, setConfirmModalState] =
    useAtom(confirmModalAtom);

  const closeConfirmModal = () => {
    setConfirmModalState({
      isOpen: false,
      message: '',
      onConfirmFunction: null,
    });
  };

  return { isOpen, message, onConfirmFunction, closeConfirmModal };
};
