'use client';

import CommonBtn from '@/components/common/commonBtn/commonBtn';
import { useForm } from 'react-hook-form';
import useTagInput from '@/hooks/useTagInput';
import ProductTagInput from './productTagInput';
import TagsContainer from './tagsContainer';
import CommonInputSection from '@/components/common/commonInputSection/commonInputSection';
import { CreateProductRequest } from '@/services/api/types/product.types';
import {
  CreateMutation,
  EditMutation,
  ProductRegistrationFormProps,
} from './types';

export default function ProductRegistrationForm({
  initialValue,
  mutation,
}: ProductRegistrationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<CreateProductRequest>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      tags: [],
      images: [],
      ...initialValue,
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

  const name = watch('name');
  const description = watch('description');
  const price = watch('price');

  const buttonActive =
    name && description && !Number.isNaN(price) && tags.length > 0 && isValid;

  const onSubmit = async (data: CreateProductRequest) => {
    if (initialValue) {
      const changedFields: Partial<CreateProductRequest> = {};
      if (data.name !== initialValue.name) changedFields.name = data.name;
      if (data.description !== initialValue.description)
        changedFields.description = data.description;
      if (data.price !== initialValue.price) changedFields.price = data.price;
      if (Object.keys(changedFields).length > 0)
        return (mutation as EditMutation).mutate(changedFields);
    }
    return (mutation as CreateMutation).mutate(data);
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
        <CommonInputSection<CreateProductRequest>
          register={register}
          name='name'
          type='text'
          label='상품명'
          errors={errors}
          placeholder='상품명을 입력해주세요'
          validation={{
            required: '상품명을 입력해주세요',
            maxLength: {
              value: 10,
              message: '10자 이내로 입력해주세요',
            },
          }}
        />
        <CommonInputSection<CreateProductRequest>
          register={register}
          name='description'
          type='text'
          inputType='textarea'
          rows={5}
          label='상품 소개'
          errors={errors}
          placeholder='상품 소개를 입력해주세요'
          validation={{
            required: '상품 소개를 입력해주세요',
            minLength: {
              value: 10,
              message: '10자 이상 입력해주세요',
            },
            maxLength: {
              value: 100,
              message: '100자 이하로 입력해주세요',
            },
          }}
        />
        <CommonInputSection<CreateProductRequest>
          register={register}
          name='price'
          type='number'
          label='판매가격'
          errors={errors}
          placeholder='판매 가격을 입력해주세요'
          validation={{
            valueAsNumber: true,
            validate: {
              isNumber: (value) =>
                !Number.isNaN(value) || '숫자로 입력해주세요',
              isInteger: (value) =>
                (Number.isInteger(value) && Number(value) >= 0) ||
                '양의 정수를 입력해주세요',
            },
            required: '판매 가격을 입력해주세요',
          }}
        />
        <ProductTagInput
          tagInput={tagInput}
          setTagInput={setTagInput}
          handleAddTag={handleAddTag}
          tagError={tagError}
        />
        <TagsContainer
          variant='registration'
          tags={tags}
          handleRemoveTag={handleRemoveTag}
        />
      </form>
    </div>
  );
}
