'use client';

import CommonBtn from '@/components/common/commonBtn/commonBtn';
import { useForm } from 'react-hook-form';
import { ProductRegistrationFormData } from './types';
import { createProduct } from '@/services/api/product';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import useTagInput from '@/hooks/useTagInput';
import ProductNameInput from './productNameInput';
import ProductDescriptionInput from './productDescriptionInput';
import ProductPriceInput from './productPriceInput';
import ProductTagInput from './productTagInput';
import TagsContainer from './tagsContainer';

export const InputSectionStyle = 'flex flex-col gap-4 mb-8';
export const InputStyle = 'bg-bg-input px-6 py-4 rounded-[12px]';
export const LabelStyle = 'text-[18px] font-bold';
export const errorMessageStyle = 'text-text-red font-semibold text-[14px]';
export const errorInputStyle = 'border border-border-input-error';

export default function ProductRegistrationForm({
  defaultValue,
}: {
  defaultValue?: ProductRegistrationFormData;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<ProductRegistrationFormData>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      tags: [],
      ...defaultValue,
    },
  });
  const {
    tagInput,
    setTagInput,
    tagError,
    tags,
    handleAddTag,
    handleRemoveTag,
  } = useTagInput({ setValue, watch });

  const createProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (product) => {
      router.push(`/items/${product.id}`);
    },
  });

  const name = watch('name');
  const description = watch('description');
  const price = watch('price');

  const buttonActive =
    name && description && !Number.isNaN(price) && tags.length > 0 && isValid;

  const onSubmit = async (data: ProductRegistrationFormData) => {
    createProductMutation.mutate(data);
  };

  return (
    <div className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'>
      <form
        className='flex flex-col w-full mb-[162px]'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-[20px] font-bold'>상품 등록하기</h2>
          <CommonBtn
            type='submit'
            disabled={!buttonActive}
          >
            등록
          </CommonBtn>
        </div>
        <ProductNameInput
          register={register}
          errors={errors}
        />
        <ProductDescriptionInput
          register={register}
          errors={errors}
        />
        <ProductPriceInput
          register={register}
          errors={errors}
        />
        <ProductTagInput
          tagInput={tagInput}
          setTagInput={setTagInput}
          handleAddTag={handleAddTag}
          tagError={tagError}
        />
        <TagsContainer
          tags={tags}
          handleRemoveTag={handleRemoveTag}
        />
      </form>
    </div>
  );
}
