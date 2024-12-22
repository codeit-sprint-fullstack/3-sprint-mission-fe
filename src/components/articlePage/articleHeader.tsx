'use client';

import { ArticleHeaderProps } from './types';
import Profile from '../common/profile/profile';
import profileIcon from '@/public/icons/profile_icon.png';
import LikeButton from '@/components/common/likeButton/likeButton';
import ActionMenu from '../community/actionMenu/actionMenu';
import { useRouter } from 'next/navigation';
import { useDeleteArticleMutation } from '@/hooks/articles/useDeleteArticleMutation';
import { useSetAtom } from 'jotai';
import { confirmModalAtom } from '@/lib/store/modalAtoms';
import { useMe } from '@/hooks/useMe';
import { useMessageModal } from '@/hooks/modals/useMessageModal';

export default function ArticleHeader({
  id,
  nickname,
  title,
  createdAt,
  likeCount,
  isLiked,
  ownerId,
}: ArticleHeaderProps) {
  const deleteArticleMutation = useDeleteArticleMutation(id);
  const setConfirmModalState = useSetAtom(confirmModalAtom);
  const { setMessage } = useMessageModal();
  const router = useRouter();

  const { data: me } = useMe();
  const onEditButtonClick = () => {
    if (me?.id !== ownerId)
      return setMessage('본인의 게시물만 수정할 수 있습니다.');
    router.push(`/community/${id}/edit`);
  };

  return (
    <div className='flex flex-col mb-4 md:mb-4 xl:mb-6 w-full'>
      <div className='flex w-full mb-4 items-center justify-between'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <ActionMenu
          id={id}
          onEditButtonClick={() => onEditButtonClick()}
          onDeleteButtonClick={() =>
            setConfirmModalState({
              isOpen: true,
              message: '정말로 게시물을 삭제하시겠어요?',
              onConfirmFunction: () => deleteArticleMutation.mutate(id),
            })
          }
        />
      </div>
      <div className='flex items-center gap-8 pb-4 border-b border-b-border-normalArticle'>
        <Profile
          nickname={nickname}
          createdAt={createdAt}
          profileIcon={profileIcon}
          iconSize={40}
          variant='date'
          layout='horizontal'
        />
        <span className='text-text-gray-secondary text-[30px] font-thin'>
          |
        </span>
        <LikeButton
          variant='article'
          id={id}
          count={likeCount}
          liked={isLiked}
        />
      </div>
    </div>
  );
}
