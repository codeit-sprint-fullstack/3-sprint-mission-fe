export interface ModalProps {
  variant: 'error' | 'confirm';
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  message: string;
  onConfirm?: () => void;
}
