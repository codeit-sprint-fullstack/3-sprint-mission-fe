'use client';

import CommonBtn from '@/components/common/commonBtn/commonBtn';
import { createArticleComments } from '@/services/api/article';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

export default function CommentForm({ articleId }: { articleId: string }) {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState('');
  const submitable = useMemo(() => {
    return comment.length <= 0;
  }, [comment]);

  const createCommentMutation = useMutation({
    mutationFn: (comment: string) => createArticleComments(articleId, comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', articleId] });
      setComment('');
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get('content') as string;
    createCommentMutation.mutate(comment);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-end gap-4 mb-10'
    >
      <div className='flex flex-col w-full gap-[9px]'>
        <label className='font-semibold'>댓글달기</label>
        <textarea
          name='content'
          id='content'
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className='bg-bg-input rounded-[12px] px-6 py-4'
          placeholder='댓글을 입력해주세요.'
        />
      </div>
      <CommonBtn disabled={submitable}>등록</CommonBtn>
    </form>
  );
}
