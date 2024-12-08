'use client';

import { useQuery } from '@tanstack/react-query';
import { BestProductListClientProps } from '../types';
import { getProductList } from '@/services/api/product';
import Product from '../product/product';

export default function BestProductListClient({
  initialData,
}: BestProductListClientProps) {
  const { data } = useQuery({
    queryKey: ['bestProducts'],
    queryFn: () =>
      getProductList({
        skip: 0,
        take: 4,
        orderBy: 'recent',
        word: '',
      }),
    initialData,
  });

  return (
    <>
      {data.data.map((product) => (
        <Product
          key={product.id}
          size='big'
          title={product.name}
          price={product.price}
          image='mockImage'
          likes={99}
        />
      ))}
    </>
  );
}
