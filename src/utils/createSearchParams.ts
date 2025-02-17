import { GetArticleListParams } from '@/services/api/types/article.types';
import { GetProductListParams } from '@/services/api/types/product.types';

export const createSearchParams = (
  params: GetProductListParams | GetArticleListParams,
  numberKeys: string[] = ['page', 'pageSize'],
) => {
  const filteredParams = Object.fromEntries(
    Object.entries(params)
      .filter(([key, value]) => key && value !== undefined)
      .map(([key, value]) => {
        if (numberKeys.includes(key)) {
          return [key, Number(value)];
        }
        return [key, value];
      }),
  );

  const searchParams = new URLSearchParams();
  Object.entries(filteredParams).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });

  return searchParams;
};
