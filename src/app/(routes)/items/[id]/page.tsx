import CommentContainer from '@/components/articlePage/comment/commentContainer';
import ReturnButton from '@/components/articlePage/returnButton/returnButton';
import AuthRedirect from '@/components/auth/authRedirect';
import ProductInformationSection from '@/components/items/itemPage/productInformationSection';
import { ParamsProps } from '@/lib/types/props.types';

export default function ProductPage({ params }: ParamsProps) {
  return (
    <div className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
      <AuthRedirect variant='signedOut' />
      <ProductInformationSection id={params.id} />
      <CommentContainer
        id={params.id}
        variant='product'
      />
      <ReturnButton variant='product' />
    </div>
  );
}
