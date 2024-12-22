import { CreateProductRequest } from '@/services/api/types/product.types';

export interface ProductTagInputProps {
  tagInput: string;
  handleAddTag: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setTagInput: (value: string) => void;
  tagError: string;
}

export interface TagsContainerProps {
  variant: 'registration' | 'display';
  tags: string[];
  handleRemoveTag?: (index: number) => void;
}

export interface ProductRegistrationFormProps {
  initialValue?: CreateProductRequest;
  productId?: string;
}
