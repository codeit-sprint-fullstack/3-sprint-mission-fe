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
import ProductSkeleton from '../product/productSkeleton';

const GRID_COLS = {
  [MEDIA_QUERY.value.large]: 'grid-cols-5',
  [MEDIA_QUERY.value.medium]: 'grid-cols-3',
  [MEDIA_QUERY.value.small]: 'grid-cols-2',
};

export default function NormalProductListClient({
  searchParams,
}: NormalProductListClientProps) {
  const [screenWidth] = useAtom(screenWidthAtom);
  const productsPerPage = Number(
    MEDIA_QUERY.productsPageSize[screenWidth || MEDIA_QUERY.value.large],
  );

  const { data: products, isLoading } = useQuery({
    queryKey: [
      'products',
      searchParams.page,
      searchParams.pageSize,
      searchParams.orderBy,
      searchParams.word,
    ],
    queryFn: () =>
      getProductList({
        page: Number(searchParams.page) || 1,
        pageSize: searchParams.pageSize,
        word: searchParams.word,
        orderBy: searchParams.orderBy || 'recent',
      }),
    enabled: !!screenWidth,
  });

  if (isLoading)
    return (
      <div className='flex flex-col items-center mb-[165px]'>
        <div
          className={cn(
            'grid gap-1 items-center md:gap-4 xl:gap-5 mb-10',
            GRID_COLS[screenWidth || MEDIA_QUERY.value.large],
          )}
        >
          {Array.from({ length: productsPerPage }, () => 0).map(
            (num, index) => (
              <ProductSkeleton
                key={num + index}
                size='small'
              />
            ),
          )}
        </div>
      </div>
    );

  if (products)
    return (
      <div className='flex flex-col items-center mb-[165px]'>
        <div
          className={cn(
            'grid gap-1 items-center md:gap-4 xl:gap-5 mb-10',
            GRID_COLS[screenWidth || MEDIA_QUERY.value.large],
          )}
        >
          {products.list.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              images={product.images}
              title={product.name}
              price={product.price}
              likes={product.favoriteCount}
              size='small'
            />
          ))}
        </div>
        <PageIndex
          maxPage={Math.ceil(
            products.totalCount / (searchParams.pageSize ?? 10),
          )}
        />
      </div>
    );
}
