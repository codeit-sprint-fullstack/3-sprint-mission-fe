'use client';

import { useQuery } from '@tanstack/react-query';
import { NormalProductListClientProps } from '../types';
import { getProductList } from '@/services/api/product';
import Product from '../product/product';
import { useAtom } from 'jotai';
import { screenWidthAtom } from '@/lib/store/atoms';
import { MEDIA_QUERY } from '@/constants/mediaQuery';
import cn from '@/lib/cn';
import PageIndex from '@/components/common/pageIndex/pageIndex';

const GRID_COLS = {
  [MEDIA_QUERY.value.large]: 'grid-cols-5',
  [MEDIA_QUERY.value.medium]: 'grid-cols-3',
  [MEDIA_QUERY.value.small]: 'grid-cols-2',
};

export default function NormalProductListClient({
  searchParams,
}: NormalProductListClientProps) {
  const [screenWidth] = useAtom(screenWidthAtom);
  const take = Number(
    MEDIA_QUERY.productsPageSize[screenWidth || MEDIA_QUERY.value.large],
  );

  const { data } = useQuery({
    queryKey: ['products', searchParams.word, searchParams.skip, take],
    queryFn: () =>
      getProductList({
        skip: Number(searchParams.skip) || 0,
        take,
        word: searchParams.word,
        orderBy: searchParams.orderBy || 'recent',
      }),
    enabled: !!screenWidth,
  });

  if (data)
    return (
      <div className='flex flex-col items-center mb-[165px]'>
        <div
          className={cn(
            'grid gap-1 items-center md:gap-4 xl:gap-5 mb-10',
            GRID_COLS[screenWidth || MEDIA_QUERY.value.large],
          )}
        >
          {data.data.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image='mockImage'
              title={product.name}
              price={product.price}
              likes={99}
              size='small'
            />
          ))}
        </div>
        <PageIndex maxPage={data.count / (searchParams.take ?? 10) + 1} />
      </div>
    );
}
