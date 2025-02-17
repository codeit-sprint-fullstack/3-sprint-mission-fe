import { atom } from 'jotai';
import {
  ConfirmModalState,
  MessageModalState,
  ModalState,
} from '../types/atoms.types';

export const confirmModalAtom = atom<ConfirmModalState>({
  isOpen: false,
  message: '',
  onConfirmFunction: null,
});

export const messageModalAtom = atom<MessageModalState>({
  isOpen: false,
  message: '',
  onCloseFunction: null,
});

export const modalAtom = atom<ModalState>({
  modalType: null,
  isOpen: false,
  message: '',
  onButtonClick: null,
});
