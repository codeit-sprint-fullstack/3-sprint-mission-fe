'use client';

import CommonBtn from '@/components/common/commonBtn/commonBtn';
import { useCreateCommentMutation } from '@/hooks/comments/useCreateCommentMutation';
import { useState } from 'react';
import { CommentFormProps } from './types';
import {
  COMMENT_FORM_BUTTON_TEXT,
  COMMENT_FORM_PLACEHOLDER_TEXT,
} from '@/constants/messages';

export default function CommentForm({ id, variant }: CommentFormProps) {
  const [comment, setComment] = useState('');
  const commentIsBlank = comment.length <= 0;

  const commentMutation = useCreateCommentMutation({ variant, id });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get('content') as string;
    commentMutation.mutate(
      { content: comment, id },
      { onSuccess: () => setComment('') },
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-end gap-4 my-10'
    >
      <div className='flex flex-col w-full gap-[9px]'>
        <label className='font-semibold'>
          {COMMENT_FORM_BUTTON_TEXT[variant]}
        </label>
        <textarea
          name='content'
          id='content'
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className='bg-bg-input rounded-[12px] px-6 py-4'
          placeholder={COMMENT_FORM_PLACEHOLDER_TEXT[variant]}
        />
      </div>
      <CommonBtn disabled={commentIsBlank}>등록</CommonBtn>
    </form>
  );
}
