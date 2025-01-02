import { GetArticleResponse } from '@/services/api/types/article.types';

export interface ArticleContextType {
  previousArticle: GetArticleResponse | undefined;
}
