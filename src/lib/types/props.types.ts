export interface ParamsProps {
  params: {
    id: string;
  };
}

import { GetArticleListParams } from '@/services/api/types/article.types';

export interface NormalArticleListProps {
  searchParams: GetArticleListParams;
}

export type BestArticleListProps = Omit<NormalArticleListProps, 'searchParams'>;
