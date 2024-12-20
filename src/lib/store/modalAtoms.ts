import { atom } from 'jotai';
import { ConfirmModalState, ErrorModalState } from '../types/atoms.types';

export const confirmModalAtom = atom<ConfirmModalState>({
  isOpen: false,
  message: '',
  onConfirmFunction: null,
});

export const errorModalAtom = atom<ErrorModalState>({
  isOpen: false,
  message: '',
});
