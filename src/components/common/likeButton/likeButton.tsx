'use client';

import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LikeButtonProps } from './likeButton.types';
import { useSetProductFavoriteMutation } from '@/hooks/products/useSetProductFavoriteMutation';
import { useDeleteProductFavoriteMutation } from '@/hooks/products/useDeleteProductFavoriteMutation';
import { useSetArticleFavoriteMutation } from '@/hooks/articles/useSetArticleFavoriteMutation';
import { useDeleteArticleFavoriteMutation } from '@/hooks/articles/useDeleteArticleFavoriteMutation';

const MUTATION_FUNCTION = {
  product: [useSetProductFavoriteMutation, useDeleteProductFavoriteMutation],
  article: [useSetArticleFavoriteMutation, useDeleteArticleFavoriteMutation],
};

export default function LikeButton({
  variant,
  count,
  liked,
  id,
}: LikeButtonProps) {
  const { mutate: setFavoriteMutation } = MUTATION_FUNCTION[variant][0]();
  const { mutate: deleteFavoriteMutation } = MUTATION_FUNCTION[variant][1]();

  return (
    <button
      onClick={
        liked ? () => deleteFavoriteMutation(id) : () => setFavoriteMutation(id)
      }
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
