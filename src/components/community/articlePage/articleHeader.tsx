'use client';

import { ArticleHeaderProps } from './types';
import Profile from '../profile/profile';
import profileIcon from '@/public/icons/profile_icon.png';
import LikeButton from '@/components/common/likeButton/likeButton';
import ActionMenu from '../actionMenu/actionMenu';
import { useRouter } from 'next/navigation';

export default function ArticleHeader({
  id,
  nickname,
  title,
  createdAt,
}: ArticleHeaderProps) {
  const router = useRouter();

  return (
    <div className='flex flex-col mb-4 md:mb-4 xl:mb-6 w-full'>
      <div className='flex w-full mb-4 items-center justify-between'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <ActionMenu
          id={id}
          onEditButtonClick={() => router.push(`/community/${id}/edit`)}
          onDeleteButtonClick={() => console.log(id)}
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
          count={50}
          liked={false}
        />
      </div>
    </div>
  );
}