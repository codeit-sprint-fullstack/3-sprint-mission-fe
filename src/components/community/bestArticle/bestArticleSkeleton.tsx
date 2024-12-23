'use client';

import { BestBadge } from '../bestBadge';

export default function BestArticleSkeleton() {
  return (
    <div className='px-6 pb-4 bg-bg-article-best w-fit rounded-lg'>
      <div className='w-[295px] md:w-[292px] xl:w-[336px] h-[182px] md:h-[182px] xl:h-[153px] flex flex-col items-start justify-between'>
        <BestBadge />
        <div className='h-[72px] w-full flex justify-between items-start'>
          <div className='flex flex-col gap-2 flex-1 mr-4'>
            <div className='h-6 bg-gray-200 rounded w-3/4 animate-pulse' />
          </div>
          <div className='w-[72px] h-[72px] bg-gray-200 rounded-[6px] border border-border-image animate-pulse' />
        </div>
        <div className='flex justify-between w-full text-[14px]'>
          <div className='flex gap-2'>
            <div className='h-5 bg-gray-200 rounded w-14 animate-pulse' />
            <div className='h-5 bg-gray-200 rounded w-14 animate-pulse' />
          </div>
          <div className='h-5 bg-gray-200 rounded w-24 animate-pulse' />
        </div>
      </div>
    </div>
  );
}
