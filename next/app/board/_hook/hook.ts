import { boardGetData } from '@/app/shared/api/board';

export function getData({
  setFn,
  orderBy = 'recent',
  pageSize = 6,
  keyword = '',
}: {
  setFn: any;
  orderBy?: 'favorite' | 'recent';
  pageSize?: number;
  keyword?: string;
}) {
  boardGetData({
    orderBy,
    pageSize,
    keyword,
  }).then((res: any) => {
    if (res.status <= 205 && res.status >= 200) setFn(res.data);
  });
}
