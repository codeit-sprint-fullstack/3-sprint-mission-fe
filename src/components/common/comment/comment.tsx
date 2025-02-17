'use client';

import { CommentProps } from './types';
import Profile from '../profile/profile';
import ActionMenu from '../../community/actionMenu/actionMenu';
import { useEditCommentClient } from '@/hooks/comments/useEditCommentClient';
import EditCommentButtons from './editCommentButtons';
import { useCommentMutation } from '@/hooks/comments/useCommentMutation';
import { useModal } from '@/hooks/modals/useModal';

export default function Comment({
  id,
  pageId,
  nickname,
  createdAt,
  profileIcon,
  content,
  variant,
}: CommentProps) {
  const { openConfirmModal } = useModal();
  const onDeleteButtonClick = () => {
    openConfirmModal('정말로 댓글을 삭제하시겠어요?', () =>
      deleteMutation.mutate({ id }),
    );
  };
  const {
    isEditing,
    comment,
    setComment,
    setEditingCommentId,
    onEditButtonClick,
  } = useEditCommentClient({ content, id });

  const { deleteMutation, editMutation } = useCommentMutation({
    pageId,
    variant,
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
              <span>{content}</span>
              <ActionMenu
                id={id}
                onEditButtonClick={onEditButtonClick}
                onDeleteButtonClick={onDeleteButtonClick}
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
              onSubmit={() => editMutation.mutate({ id, content: comment })}
            />
          )}
        </div>
      </div>
    </>
  );
}
