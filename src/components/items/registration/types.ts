import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface ProductRegistrationFormData {
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export interface ProductInputProps {
  register: UseFormRegister<ProductRegistrationFormData>;
  errors: FieldErrors<ProductRegistrationFormData>;
}

export interface ProductTagInputProps {
  tagInput: string;
  handleAddTag: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setTagInput: (value: string) => void;
  tagError: string;
}

export interface TagsContainerProps {
  tags: string[];
  handleRemoveTag: (index: number) => void;
}
