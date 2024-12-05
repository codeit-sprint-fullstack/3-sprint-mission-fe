'use client';

import { useMemo, useState } from 'react';
import { WriteFormProps } from './writeForm.types';
import CommonBtn from '@/components/common/commonBtn/commonBtn';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { createArticle, updateArticle } from '@/services/api/article';

export default function WriteForm({ initialData, articleId }: WriteFormProps) {
  const pathname = usePathname();
  const isEditMode = pathname.includes('/edit');
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');

  const formComplete = useMemo(() => {
    return title.length > 0 && content.length > 0;
  }, [title, content]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const articleRequest = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    };

    try {
      if (articleId) {
        await updateArticle(articleId, articleRequest);
        router.push(`/community/${articleId}`);
      } else {
        const result = await createArticle(articleRequest);
        router.push(`/community/${result.id}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const router = useRouter();

  return (
    <form
      className='w-full md:w-full xl:w-[1200px] p-4 md:p-6 xl:p-0 xl:py-6 flex flex-col'
      onSubmit={handleSubmit}
    >
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-xl font-bold'>
          {isEditMode ? '게시글 쓰기' : '게시글 수정하기'}
        </h2>
        <CommonBtn
          disabled={!formComplete}
          type='submit'
        >
          {isEditMode ? '수정' : '등록'}
        </CommonBtn>
      </div>
      <div className='flex flex-col gap-3 mb-4 md:mb-6 xl:mb-6'>
        <label
          className='font-bold text-[18px]'
          htmlFor='title'
        >
          *제목
        </label>
        <input
          className='bg-bg-input rounded-xl px-6 py-4'
          id='title'
          name='title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <label
          className='font-bold text-[18px]'
          htmlFor='content'
        >
          *내용
        </label>
        <textarea
          className='bg-bg-input rounded-xl px-6 py-4 h-[282px]'
          name='content'
          id='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </form>
  );
}
