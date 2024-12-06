import Image from 'next/image';
import { ProfileProps } from './profile.types';
import cn from '@/lib/cn';
import { formatDate } from '@/lib/formatDate';
import { formatTime } from '@/lib/formatTime';

const FLEX_STYLE = {
  horizontal: 'flex',
  vertical: 'flex flex-col justify-between h-full',
};

export default function Profile({
  nickname,
  createdAt,
  profileIcon,
  iconSize,
  variant,
  layout,
}: ProfileProps) {
  return (
    <div className='flex gap-2 text-[14px] font-normal items-center'>
      <Image
        src={profileIcon}
        alt='회원 프로필 사진'
        width={iconSize}
        height={iconSize}
      />
      <div className={cn(FLEX_STYLE[layout], 'gap-2')}>
        <span className='text-text-black-secondary'>{nickname}</span>
        <span className='text-text-gray-primary'>
          {variant === 'date' ? formatDate(createdAt) : formatTime(createdAt)}
        </span>
      </div>
    </div>
  );
}
