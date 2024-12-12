'use client';

import { ArticleHeaderProps } from './types';
import Profile from '../common/profile/profile';
import profileIcon from '@/public/icons/profile_icon.png';
import LikeButton from '@/components/common/likeButton/likeButton';
import ActionMenu from '../community/actionMenu/actionMenu';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteArticle } from '@/services/api/article';

export default function ArticleHeader({
  id,
  nickname,
  title,
  createdAt,
}: ArticleHeaderProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const deleteArticleMutation = useMutation({
    mutationFn: () => deleteArticle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bestArticles'] });
      queryClient.invalidateQueries({ queryKey: ['normalArticles'] });
      router.push('/community');
    },
  });

  return (
    <div className='flex flex-col mb-4 md:mb-4 xl:mb-6 w-full'>
      <div className='flex w-full mb-4 items-center justify-between'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <ActionMenu
          id={id}
          onEditButtonClick={() => router.push(`/community/${id}/edit`)}
          onDeleteButtonClick={() => deleteArticleMutation.mutate()}
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
