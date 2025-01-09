'use client';

import Image from 'next/image';
import { ProductProps } from '../types';
import mockImage from '@/public/images/mockImage/mock_image.png';
import LikeCounter from '../../common/likeCounter/likeCounter';
import Link from 'next/link';
import cn from '@/lib/cn';

const IMAGE_CONTAINER_SIZE = {
  big: 'w-[343px] md:w-[343px] xl:w-[282px] aspect-square',
  small: 'w-[168px] md:w-[221px] xl:w-[221px] aspect-square',
};

export default function Product({
  images,
  id,
  title,
  price,
  likes,
  size,
}: ProductProps) {
  return (
    <Link href={`/items/${id}`}>
      <div className='flex flex-col gap-4 items-center'>
        <div className='flex flex-col gap-4'>
          <div
            className={cn(
              IMAGE_CONTAINER_SIZE[size],
              'flex items-center',
              'rounded-2xl',
              'relative',
            )}
          >
            <Image
              src={images[0] || mockImage}
              alt='상품 이미지'
              className='object-contain rounded-xl'
              fill
            />
          </div>
          <div className='flex flex-col gap-[6px]'>
            <span className='text-sm font-medium'>{title}</span>
            <span className='font-bold'>{`${price.toLocaleString()}원`}</span>
            <LikeCounter
              likes={likes}
              className='text-xs text-text-black-secondary font-medium'
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
