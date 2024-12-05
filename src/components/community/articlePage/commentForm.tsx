'use client';

import CommonBtn from '@/components/common/commonBtn/commonBtn';
import { useMemo, useState } from 'react';

export default function CommentForm() {
  const [comment, setComment] = useState('');
  const submitable = useMemo(() => {
    return comment.length <= 0;
  }, [comment]);

  return (
    <form className='flex flex-col items-end gap-4'>
      <div className='flex flex-col w-full gap-[9px]'>
        <label>댓글달기</label>
        <textarea
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
