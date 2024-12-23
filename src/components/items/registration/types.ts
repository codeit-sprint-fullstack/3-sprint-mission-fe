import {
  CreateProductRequest,
  GetProductResponse,
} from '@/services/api/types/product.types';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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

export type ProductMutation<T> = UseMutationResult<
  GetProductResponse,
  AxiosError<{ message: string }>,
  T,
  unknown
>;

export type CreateMutation = ProductMutation<CreateProductRequest>;

export type EditMutation = ProductMutation<Partial<CreateProductRequest>>;

export interface ProductRegistrationFormProps {
  initialValue?: CreateProductRequest;
  mutation: CreateMutation | EditMutation;
}
