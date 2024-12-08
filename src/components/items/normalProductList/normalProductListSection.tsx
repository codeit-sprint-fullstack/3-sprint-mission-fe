import { getProductList } from '@/services/api/product';
import { NormalProductListSectionProps } from '../types';
import NormalProductListClient from './normalProductListClient';

export default async function NormalProductListSection({
  searchParams,
}: NormalProductListSectionProps) {
  const productList = await getProductList({
    skip: Number(searchParams.skip) || 0,
    take: Number(searchParams.take) || 10,
    word: searchParams.word,
    orderBy: searchParams.orderBy || 'recent',
  });

  return (
    <div className='w-full flex flex-wrap gap-5 mb-[223px]'>
      <NormalProductListClient
        initialData={productList}
        searchParams={searchParams}
      />
    </div>
  );
}
