'use client';

import { CommentProps } from './types';
import Profile from '../../common/profile/profile';
import ActionMenu from '../../community/actionMenu/actionMenu';
import { useAtom } from 'jotai';
import { editingCommentIdAtom } from '@/lib/store/atoms';
import { useState } from 'react';
import { deleteComment, editComment } from '@/services/api/comment';
import CommonBtn from '@/components/common/commonBtn/commonBtn';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function Comment({
  id,
  articleId,
  nickname,
  createdAt,
  profileIcon,
  content,
}: CommentProps) {
  const queryClient = useQueryClient();
  const [editingCommentId, setEditingCommentId] = useAtom(editingCommentIdAtom);
  const [comment, setComment] = useState(content);
  const isEditing = editingCommentId === id;

  const editCommentMutation = useMutation({
    mutationFn: () => editComment(id, comment),
    onSuccess: (response) => {
      setEditingCommentId(null);
      queryClient.invalidateQueries({ queryKey: ['comments', articleId] });
      setComment(response.data.content);
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: () => deleteComment(id),
    onSuccess: () => {
      setEditingCommentId(null);
      queryClient.invalidateQueries({ queryKey: ['comments', articleId] });
    },
  });

  const onEditButtonClick = () => {
    setEditingCommentId(id);
  };

  return (
    <div className='w-full flex flex-col justify-start pb-3 bg-bg-article-normal mb-6 border-b border-b-border-normalArticle'>
      <div className='mb-6 flex justify-between w-full'>
        {isEditing ? (
          <>
            <input
              className='w-full px-4'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <CommonBtn
              className='w-[120px]'
              onClick={() => editCommentMutation.mutate()}
            >
              수정하기
            </CommonBtn>
          </>
        ) : (
          <span>{comment}</span>
        )}
        <ActionMenu
          id={id}
          onEditButtonClick={onEditButtonClick}
          onDeleteButtonClick={() => deleteCommentMutation.mutate()}
        />
      </div>
      <Profile
        variant='time'
        layout='vertical'
        nickname={nickname}
        createdAt={createdAt}
        profileIcon={profileIcon}
        iconSize={32}
      />
    </div>
  );
}
