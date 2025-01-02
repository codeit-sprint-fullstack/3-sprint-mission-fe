'use client';

import { useForm } from 'react-hook-form';
import {
  ArticleFormData,
  ArticleFormProps,
  CreateMutation,
  EditMutation,
} from './writeForm.types';
import CommonInputSection from '../common/commonInputSection/commonInputSection';
import { CreateArticleRequest } from '@/services/api/types/article.types';
import CommonBtn from '../common/commonBtn/commonBtn';

export default function WriteForm({
  initialData,
  variant,
  mutation,
}: ArticleFormProps) {
  const isEditMode = variant === 'edit';
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ArticleFormData>({
    mode: 'onBlur',
    defaultValues: {
      title: initialData?.title || '',
      content: initialData?.content || '',
    },
  });

  const title = watch('title');
  const content = watch('content');
  const formComplete = title.trim() !== '' && content.trim() !== '' && isValid;

  const onSubmit = (data: ArticleFormData) => {
    if (isEditMode && initialData) {
      const changedFields: Partial<CreateArticleRequest> = {};

      if (data.title !== initialData.title) changedFields.title = data.title;
      if (data.content !== initialData.content)
        changedFields.content = data.content;
      if (Object.keys(changedFields).length > 0)
        return (mutation as EditMutation).mutate(changedFields);
    }
    return (mutation as CreateMutation).mutate(data);
  };

  return (
    <form
      className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-xl font-bold'>
          {isEditMode ? '게시글 수정하기' : '게시글 쓰기'}
        </h2>
        <CommonBtn
          disabled={!formComplete}
          type='submit'
        >
          {isEditMode ? '수정' : '등록'}
        </CommonBtn>
      </div>
      <CommonInputSection<ArticleFormData>
        register={register}
        name='title'
        type='text'
        label='*제목'
        errors={errors}
        placeholder='제목을 입력해주세요'
      />
      <CommonInputSection<ArticleFormData>
        register={register}
        name='content'
        type='text'
        label='*내용'
        errors={errors}
        placeholder='내용을 입력해주세요'
        inputType='textarea'
      />
    </form>
  );
}
