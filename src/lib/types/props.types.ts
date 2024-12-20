export interface ParamsProps {
  params: {
    id: string;
  };
}

import {
  GetArticleListParams,
  GetArticleListResponse,
} from '@/services/api/types/article.types';

export interface NormalArticleListProps {
  searchParams: GetArticleListParams;
  initialData: GetArticleListResponse;
}

export type BestArticleListProps = Omit<NormalArticleListProps, 'searchParams'>;
