import Image from 'next/image';
import { ProfileProps } from './profile.types';

export default function Profile({
  nickname,
  createdAt,
  profileIcon,
  iconSize,
}: ProfileProps) {
  return (
    <div className='flex gap-2 text-[14px] font-normal items-center'>
      <Image
        src={profileIcon}
        alt='회원 프로필 사진'
        width={iconSize}
        height={iconSize}
      />
      <span className='text-text-black-secondary'>{nickname}</span>
      <span className='text-text-gray-primary'>{createdAt}</span>
    </div>
  );
}
