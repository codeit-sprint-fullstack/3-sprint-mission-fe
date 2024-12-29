'use client';

import ReturnButton from '@/components/common/returnButton/returnButton';
import ProductInformationSection from '@/components/items/itemPage/productInformationSection';
import { ParamsProps } from '@/lib/types/props.types';
import CommentListClient from '@/components/common/comment/commentListClient';
import dynamic from 'next/dynamic';
const AuthRedirect = dynamic(() => import('@/components/auth/authRedirect'), {
  ssr: false,
});

export default function ProductPage({ params }: ParamsProps) {
  return (
    <>
      <div className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
        <AuthRedirect variant='signedOut' />
        <ProductInformationSection id={params.id} />
        <CommentListClient
          id={params.id}
          variant='product'
        />
        <ReturnButton variant='product' />
      </div>
    </>
  );
}
