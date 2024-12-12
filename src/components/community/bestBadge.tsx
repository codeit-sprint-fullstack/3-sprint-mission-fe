import bestBadgeIcon from '@/public/icons/best_badge_icon.png';
import Image from 'next/image';

export function BestBadge() {
  return (
    <div className='bg-bg-badge-best px-6 py-[2px] flex items-center justify-center w-[102px] h-[30px] rounded-bl-[16px] rounded-br-[16px]'>
      <div className='flex items-center justify-between gap-1'>
        <Image
          src={bestBadgeIcon}
          alt='베스트 게시글 아이콘'
          width={12}
          height={12}
        />
        <span className='font-semibold text-text-white'>Best</span>
      </div>
    </div>
  );
}
