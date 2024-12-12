import BestProductListSection from '@/components/items/bestProductList/bestProductListSection';
import NormalProductListClient from '@/components/items/normalProductList/normalProductListClient';
import ProductListHeader from '@/components/items/productListHeader/productListHeader';
import { GetProductListParams } from '@/services/api/types/product';

export default function Page({
  searchParams,
}: {
  searchParams: GetProductListParams;
}) {
  return (
    <div className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
      <BestProductListSection />
      <ProductListHeader />
      <NormalProductListClient searchParams={searchParams} />
    </div>
  );
}
