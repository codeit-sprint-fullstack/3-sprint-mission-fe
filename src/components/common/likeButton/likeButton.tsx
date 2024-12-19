'use client';

import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LikeButtonProps } from './likeButton.types';
import { useSetProductFavoriteMutation } from '@/hooks/products/useSetProductFavoriteMutation';
import { useDeleteProductFavoriteMutation } from '@/hooks/products/useDeleteProductFavoriteMutation';

export default function LikeButton({ count, liked, id }: LikeButtonProps) {
  const { mutate: setFavoriteMutation } = useSetProductFavoriteMutation();
  const { mutate: deleteFavoriteMutation } = useDeleteProductFavoriteMutation();

  return (
    <button
      onClick={
        liked ? () => deleteFavoriteMutation(id) : () => setFavoriteMutation(id)
      }
      className='border border-border-like-button rounded-[35px] px-3 py-1 text-text-charcoal-primary flex justify-between items-center gap-[6px]'
    >
      <FontAwesomeIcon
        icon={liked ? fullHeart : emptyHeart}
        className='text-text-red'
      />
      {count}
    </button>
  );
}
