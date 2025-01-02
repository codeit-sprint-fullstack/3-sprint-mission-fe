import {
  CreateArticleRequest,
  GetArticleResponse,
} from '@/services/api/types/article.types';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

type ArticleMutation<T> = UseMutationResult<
  GetArticleResponse,
  AxiosError<{ message: string }>,
  T,
  unknown
>;

export type CreateMutation = ArticleMutation<CreateArticleRequest>;
export type EditMutation = ArticleMutation<Partial<CreateArticleRequest>>;

export interface ArticleFormProps {
  initialData?: ArticleFormData;
  variant: 'write' | 'edit';
  mutation: CreateMutation | EditMutation;
}

export interface ArticleFormData {
  title: string;
  content: string;
}
