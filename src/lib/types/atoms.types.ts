export interface ConfirmModalState {
  isOpen: boolean;
  message: string;
  onConfirmFunction: (() => void) | null;
}

export interface MessageModalState {
  isOpen: boolean;
  message: string;
  onCloseFunction: (() => void) | null;
}
