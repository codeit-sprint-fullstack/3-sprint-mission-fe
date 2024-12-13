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
  type?: string;
  validation?: RegisterOptions<T, Path<T>>;
}

export interface SignUpFormData {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

export type SignInFormData = Omit<SignUpFormData, 'nickname' | 'passwordCheck'>;
