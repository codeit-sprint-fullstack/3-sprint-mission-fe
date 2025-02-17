import { HTMLInputTypeAttribute } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export interface CommonInputSectionProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label: string;
  name: Path<T>;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  validation?: RegisterOptions<T, Path<T>>;
  inputType?: 'input' | 'textarea';
  rows?: number;
}

export interface SignUpFormData {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export type SignInFormData = Omit<SignUpFormData, 'nickname' | 'passwordCheck'>;
