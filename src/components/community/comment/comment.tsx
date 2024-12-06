'use client';

import { CommentProps } from './comment.types';
import Profile from '../profile/profile';
import ActionMenu from '../actionMenu/actionMenu';
import { useAtom } from 'jotai';
import { editingCommentIdAtom } from '@/lib/store/atoms';
import { useState } from 'react';
import { deleteComment, editComment } from '@/services/api/comment';
import CommonBtn from '@/components/common/commonBtn/commonBtn';

export default function Comment({
  id,
  nickname,
  createdAt,
  profileIcon,
  content,
}: CommentProps) {
  const [editingCommentId, setEditingCommentId] = useAtom(editingCommentIdAtom);
  const [comment, setComment] = useState(content);
  const isEditing = editingCommentId === id;
  const handleEdit = async () => {
    const { data: editedComment } = await editComment(id, comment);
    setEditingCommentId(null);
    setComment(editedComment.content);
  };

  const handleDelete = async () => {
    await deleteComment(id);
  };

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
              onClick={handleEdit}
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
          onDeleteButtonClick={handleDelete}
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
