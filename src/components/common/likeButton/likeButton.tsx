'use client';

import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LikeButtonProps } from './likeButton.types';

export default function LikeButton({ onClick, count, liked }: LikeButtonProps) {
  return (
    <button
      onClick={onClick}
      className='border border-border-like-button rounded-[35px] px-3 py-1 text-text-charcoal-primary flex justify-between items-center gap-[6px]'
    >
      <FontAwesomeIcon
        icon={liked ? fullHeart : emptyHeart}
        className={liked ? 'text-text-red' : ''}
      />
      {count}
    </button>
  );
}
