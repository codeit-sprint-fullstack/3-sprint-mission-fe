'use client';

import { CommentProps } from './types';
import Profile from '../../common/profile/profile';
import ActionMenu from '../../community/actionMenu/actionMenu';
import { useDeleteCommentMutation } from '@/hooks/comments/useDeleteCommentMutation';
import Modal from '@/components/modal/modal';
import { useErrorHandling } from '@/hooks/useErrorHandling';
import { useEditCommentMutation } from '@/hooks/comments/useEditCommentMutation';
import { useEditCommentClient } from '@/hooks/comments/useEditCommentClient';
import EditCommentButtons from './editCommentButtons';
import { useState } from 'react';

export default function Comment({
  id,
  pageId,
  nickname,
  createdAt,
  profileIcon,
  content,
  variant,
}: CommentProps) {
  const { modalOpen, setModalOpen, errorMessage, handleError } =
    useErrorHandling();

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const {
    isEditing,
    comment,
    setComment,
    setEditingCommentId,
    onEditButtonClick,
  } = useEditCommentClient({ content, id });

  const deleteCommentMutation = useDeleteCommentMutation({
    pageId,
    variant,
    onErrorFn: handleError,
  });

  const editCommentMutation = useEditCommentMutation({
    pageId,
    variant,
    onErrorFn: handleError,
  });

  return (
    <>
      <div className='w-full flex flex-col justify-start pb-3 bg-bg-article-normal mb-6 border-b border-b-border-normalArticle'>
        <div className='mb-6 flex justify-between w-full'>
          {isEditing ? (
            <input
              className='w-full px-6 bg-bg-input py-4 h-[80px] rounded-xl text-sm'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          ) : (
            <>
              <span>{comment}</span>
              <ActionMenu
                id={id}
                onEditButtonClick={onEditButtonClick}
                onDeleteButtonClick={() => setConfirmModalOpen(true)}
              />
            </>
          )}
        </div>
        <div className='flex justify-between'>
          <Profile
            variant='time'
            layout='vertical'
            nickname={nickname}
            createdAt={createdAt}
            profileIcon={profileIcon}
            iconSize={32}
          />
          {isEditing && (
            <EditCommentButtons
              onCancel={() => setEditingCommentId(null)}
              onSubmit={() =>
                editCommentMutation.mutate(
                  { id, content: comment },
                  {
                    onSuccess: () => setEditingCommentId(null),
                  },
                )
              }
            />
          )}
        </div>
      </div>
      <Modal
        variant='error'
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        message={errorMessage}
      />
      <Modal
        variant='confirm'
        modalOpen={confirmModalOpen}
        setModalOpen={setConfirmModalOpen}
        onConfirm={() => {
          setConfirmModalOpen(false);
          deleteCommentMutation.mutate({ id });
        }}
        message='정말로 댓글을 삭제하시겠어요?'
      />
    </>
  );
}
