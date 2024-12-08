'use client';

import { useQuery } from '@tanstack/react-query';
import { NormalProductListClientProps } from '../types';
import { getProductList } from '@/services/api/product';
import Product from '../product/product';

export default function NormalProductListClient({
  initialData,
  searchParams,
}: NormalProductListClientProps) {
  const { data } = useQuery({
    queryKey: ['products', searchParams.word],
    queryFn: () =>
      getProductList({
        skip: Number(searchParams.skip) || 0,
        take: Number(searchParams.take) || 10,
        word: searchParams.word,
        orderBy: searchParams.orderBy || 'recent',
      }),
    initialData,
  });

  return (
    <>
      {data.data.map((product) => (
        <Product
          key={product.id}
          image='mockImage'
          title={product.name}
          price={product.price}
          likes={99}
          size='small'
        />
      ))}
    </>
  );
}
