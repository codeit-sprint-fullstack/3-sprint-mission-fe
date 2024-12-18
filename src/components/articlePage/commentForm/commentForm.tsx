'use client';

import CommonBtn from '@/components/common/commonBtn/commonBtn';
import { useCreateCommentMutation } from '@/hooks/comments/useCreateCommentMutation';
import { useState } from 'react';
import { CommentFormProps } from './types';

const BUTTON_TEXT = {
  product: '문의하기',
  article: '댓글달기',
};

const PLACEHOLDER_TEXT = {
  product:
    '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.',
  article: '댓글을 입력해주세요.',
};

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
        <label className='font-semibold'>{BUTTON_TEXT[variant]}</label>
        <textarea
          name='content'
          id='content'
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className='bg-bg-input rounded-[12px] px-6 py-4'
          placeholder={PLACEHOLDER_TEXT[variant]}
        />
      </div>
      <CommonBtn disabled={commentIsBlank}>등록</CommonBtn>
    </form>
  );
}
