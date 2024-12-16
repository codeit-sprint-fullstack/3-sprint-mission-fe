'use client';

import { useQuery } from '@tanstack/react-query';
import { BestProductListClientProps } from '../types';
import { getProductList } from '@/services/api/product';
import Product from '../product/product';
import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { useAtom } from 'jotai';
import { screenWidthAtom } from '@/lib/store/atoms';

const SLICE_VALUE = {
  [MEDIA_QUERY.value.large]: 4,
  [MEDIA_QUERY.value.medium]: 2,
  [MEDIA_QUERY.value.small]: 1,
};

export default function BestProductListClient({
  initialData,
}: BestProductListClientProps) {
  const [screenWidth] = useAtom(screenWidthAtom);
  const sliceValue = SLICE_VALUE[screenWidth || MEDIA_QUERY.value.large];

  const { data } = useQuery({
    queryKey: ['bestProducts'],
    queryFn: () =>
      getProductList({
        page: 1,
        pageSize: 4,
        orderBy: 'favorite',
        keyword: '',
      }),
    initialData,
  });

  console.log(data);

  return (
    <>
      {data.list.slice(0, sliceValue).map((product) => (
        <Product
          key={product.id}
          id={product.id}
          size='big'
          title={product.name}
          price={product.price}
          images={product.images}
          likes={product.favoriteCount}
        />
      ))}
    </>
  );
}
