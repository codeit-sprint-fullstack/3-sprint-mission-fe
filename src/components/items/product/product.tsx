'use client';

import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { screenWidthAtom } from '@/lib/store/atoms';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { ProductProps } from '../types';
import mockImage from '@/public/images/mockImage/mock_image.png';
import LikeCounter from '../../common/likeCounter/likeCounter';
import Link from 'next/link';

const IMAGE_SIZE = {
  big: {
    [MEDIA_QUERY.value.large]: 282,
    [MEDIA_QUERY.value.medium]: 343,
    [MEDIA_QUERY.value.small]: 343,
  },
  small: {
    [MEDIA_QUERY.value.large]: 221,
    [MEDIA_QUERY.value.medium]: 221,
    [MEDIA_QUERY.value.small]: 168,
  },
};

export default function Product({
  // 이미지 기능 구현 후 사용
  // image,
  id,
  title,
  price,
  likes,
  size,
}: ProductProps) {
  const [screenWidth] = useAtom(screenWidthAtom);

  return (
    <Link href={`/items/${id}`}>
      <div className='flex flex-col gap-4 items-center'>
        {/* 이후 이미지 대체 예정 */}
        <div>
          <Image
            src={mockImage}
            alt='상품 이미지'
            width={IMAGE_SIZE[size][screenWidth!]}
            height={IMAGE_SIZE[size][screenWidth!]}
            className='rounded-2xl'
          />
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
