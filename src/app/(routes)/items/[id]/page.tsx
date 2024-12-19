import CommentContainer from '@/components/articlePage/comment/commentContainer';
import ReturnButton from '@/components/articlePage/returnButton/returnButton';
import ProductInformationSection from '@/components/items/itemPage/productInformationSection';
import { ParamsProps } from '@/lib/types/paramsProps.types';
import { getProduct } from '@/services/api/product';

export default async function ProductPage({ params }: ParamsProps) {
  const product = await getProduct(params.id);

  return (
    <div className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
      <ProductInformationSection id={params.id} />
      <CommentContainer
        id={params.id}
        variant='product'
      />
      <ReturnButton variant='product' />
    </div>
  );
}
