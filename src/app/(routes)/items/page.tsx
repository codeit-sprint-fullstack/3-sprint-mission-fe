import BestProductListSection from '@/components/items/bestProductList/bestProductListSection';
import NormalProductListClient from '@/components/items/normalProductList/normalProductListClient';
import ProductListHeader from '@/components/items/productListHeader/productListHeader';
import { GetProductListParams } from '@/services/api/types/product.types';
import { createSearchParams } from '@/utils/createSearchParams';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

const getProducts = async (searchParams: GetProductListParams) => {
  const params = createSearchParams(searchParams);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?${params}`,
  );
  const data = await response.json();

  return data;
};

export default async function Page({
  searchParams,
}: {
  searchParams: GetProductListParams;
}) {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ['products', ...Object.values(searchParams)],
    queryFn: async () => await getProducts(searchParams),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
        <BestProductListSection />
        <ProductListHeader searchParams={searchParams} />
        <NormalProductListClient searchParams={searchParams} />
      </div>
    </HydrationBoundary>
  );
}
