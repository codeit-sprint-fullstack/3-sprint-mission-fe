import BestProductListSection from '@/components/items/bestProductList/bestProductListSection';
import NormalProductListSection from '@/components/items/normalProductList/normalProductListSection';
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
      <NormalProductListSection searchParams={searchParams} />
    </div>
  );
}
