import { getProductList } from '@/services/api/product';
import BestProductListClient from './bestProductListClient';

export default async function BestProductListSection() {
  const productList = await getProductList({
    skip: 0,
    take: 4,
    orderBy: 'recent',
    word: '',
  });

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>베스트 상품</h2>
      <div className='flex gap-6 justify-center items-center mb-10'>
        <BestProductListClient initialData={productList} />
      </div>
    </>
  );
}
