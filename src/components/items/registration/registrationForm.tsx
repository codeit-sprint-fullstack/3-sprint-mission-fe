'use client';

import CommonBtn from '@/components/common/commonBtn/commonBtn';
import cn from '@/lib/cn';
import { useForm } from 'react-hook-form';
import { ProductRegistrationFormData } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { createProduct } from '@/services/api/product';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import useTagInput from '@/hooks/useTagInput';

const InputSectionStyle = 'flex flex-col gap-4 mb-8';
const InputStyle = 'bg-bg-input px-6 py-4 rounded-[12px]';
const LabelStyle = 'text-[18px] font-bold';
const errorMessageStyle = 'text-text-red font-semibold text-[14px]';
const errorInputStyle = 'border border-border-input-error';

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
        <div className={cn(InputSectionStyle)}>
          <label className={LabelStyle}>상품명</label>
          <input
            className={cn(InputStyle, errors.name && errorInputStyle)}
            placeholder='상품명을 입력해주세요'
            {...register('name', {
              required: '상품명을 입력해주세요',
              maxLength: {
                value: 10,
                message: '10자 이내로 입력해주세요',
              },
            })}
          />
          {errors.name && (
            <span className={errorMessageStyle}>{errors.name.message}</span>
          )}
        </div>
        <div className={cn(InputSectionStyle)}>
          <label className={LabelStyle}>상품 소개</label>
          <textarea
            className={cn(InputStyle, errors.description && errorInputStyle)}
            placeholder='상품 소개를 입력해주세요'
            {...register('description', {
              required: '상품 소개를 입력해주세요',
              minLength: {
                value: 10,
                message: '10자 이상 입력해주세요',
              },
              maxLength: {
                value: 100,
                message: '100자 이하로 입력해주세요',
              },
            })}
          />
          {errors.description && (
            <span className={errorMessageStyle}>
              {errors.description.message}
            </span>
          )}
        </div>
        <div className={cn(InputSectionStyle)}>
          <label className={LabelStyle}>판매가격</label>
          <input
            type='number'
            className={cn(InputStyle, errors.price && errorInputStyle)}
            placeholder='판매 가격을 입력해주세요'
            {...register('price', {
              valueAsNumber: true,
              validate: {
                isNumber: (value) =>
                  !Number.isNaN(value) || '숫자로 입력해주세요',
                isInteger: (value) =>
                  (Number.isInteger(value) && value >= 0) ||
                  '양의 정수를 입력해주세요',
              },
              required: '판매 가격을 입력해주세요',
            })}
          />
          {errors.price && (
            <span className={errorMessageStyle}>{errors.price.message}</span>
          )}
        </div>
        <div className={cn(InputSectionStyle)}>
          <label className={LabelStyle}>태그</label>
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
            placeholder='태그를 입력해주세요.'
            className={InputStyle}
          />
          {tagError && <span className={errorMessageStyle}>{tagError}</span>}
        </div>
        <div className='flex gap-3'>
          {tags.map((tag, index) => (
            <span
              className='bg-bg-tag flex items-center justify-between px-3 py-[6px] rounded-[26px] gap-2'
              key={tag}
            >
              #{tag}
              <button
                type='button'
                className='w-5 h-5 bg-bg-close-button rounded-full flex items-center justify-center text-text-white-secondary'
                onClick={() => handleRemoveTag(index)}
              >
                <FontAwesomeIcon
                  icon={faX}
                  className='w-2'
                />
              </button>
            </span>
          ))}
        </div>
      </form>
    </div>
  );
}
