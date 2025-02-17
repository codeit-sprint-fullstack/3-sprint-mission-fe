import Image from 'next/image';
import defaultAvatar from '@/public/icons/profile_icon.png';
import { useAtom } from 'jotai';
import { screenWidthAtom } from '@/lib/store/atoms';
import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { AvatarProps } from './types';

export default function Avatar({ image, nickname }: AvatarProps) {
  const [screenWidth] = useAtom(screenWidthAtom);
  const isLargeScreen = screenWidth === MEDIA_QUERY.value.large;

  return (
    <div className='flex justify-between items-center gap-[6px] text-lg text-text-black-secondary'>
      <Image
        src={image ?? defaultAvatar}
        alt='프로필 이미지'
        width={40}
        height={40}
      />
      {isLargeScreen && <span>{nickname}</span>}
    </div>
  );
}
