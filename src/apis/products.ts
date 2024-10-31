import { BASE_URL, fetchReq } from './fetch.js';

type OrderType = 'favorite' | 'recent'
type QueryObjType = {
  page?: number;
  pageSize?: number;
  orderBy?: OrderType;
  keyword?: string;
}


export const getProductList = (queryObj: QueryObjType) => {
  const queryStr = new URLSearchParams(queryObj as Record<string, string>);
  return fetchReq({
    method: 'GET',
    path: `${BASE_URL}products?${queryStr}`,
  });
};
