'use client';

import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LikeButtonProps } from './likeButton.types';

export default function LikeButton({ count, liked = false }: LikeButtonProps) {
  const handleClick = () => {
    // 구현예정
  };

  return (
    <button
      onClick={handleClick}
      className='border border-border-like-button rounded-[35px] px-3 py-1 text-text-charcoal-primary flex justify-between items-center gap-[6px]'
    >
      <FontAwesomeIcon icon={liked ? fullHeart : emptyHeart} />
      {count}
    </button>
  );
}
