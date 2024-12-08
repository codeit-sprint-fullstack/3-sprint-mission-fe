'use client';

import { useQuery } from '@tanstack/react-query';
import { NormalProductListClientProps } from '../types';
import { getProductList } from '@/services/api/product';
import Product from '../product/product';
import { useAtom } from 'jotai';
import { screenWidthAtom } from '@/lib/store/atoms';
import { MEDIA_QUERY } from '@/constants/mediaQuery';

const TAKE_VALUE = {
  [MEDIA_QUERY.value.large]: 10,
  [MEDIA_QUERY.value.medium]: 6,
  [MEDIA_QUERY.value.small]: 4,
};

export default function NormalProductListClient({
  searchParams,
}: NormalProductListClientProps) {
  const [screenWidth] = useAtom(screenWidthAtom);
  const take = Number(TAKE_VALUE[screenWidth || MEDIA_QUERY.value.large]);

  const { data } = useQuery({
    queryKey: ['products', searchParams.word, take],
    queryFn: () =>
      getProductList({
        skip: Number(searchParams.skip) || 0,
        take,
        word: searchParams.word,
        orderBy: searchParams.orderBy || 'recent',
      }),
    enabled: !!screenWidth,
  });

  return (
    <div className='w-full flex flex-wrap gap-1 md:gap-4 xl:gap-5 mb-[223px]'>
      {data?.data.map((product) => (
        <Product
          key={product.id}
          image='mockImage'
          title={product.name}
          price={product.price}
          likes={99}
          size='small'
        />
      ))}
    </div>
  );
}
