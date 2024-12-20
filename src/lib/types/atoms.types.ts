export interface ConfirmModalState {
  isOpen: boolean;
  message: string;
  onConfirmFunction: (() => void) | null;
}

export interface ErrorModalState {
  isOpen: boolean;
  message: string;
}
