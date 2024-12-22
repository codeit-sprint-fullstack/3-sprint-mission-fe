import cn from '@/lib/cn';

const IMAGE_CONTAINER_SIZE = {
  big: 'w-[343px] md:w-[343px] xl:w-[282px] aspect-square',
  small: 'w-[168px] md:w-[221px] xl:w-[221px] aspect-square',
};

export default function ProductSkeleton({ size }: { size: 'big' | 'small' }) {
  return (
    <div className='flex flex-col gap-4'>
      <div
        className={cn(
          IMAGE_CONTAINER_SIZE[size],
          'flex items-center',
          'rounded-2xl',
          'relative',
          'bg-gray-200 animate-pulse',
        )}
      />
      <div className='flex flex-col gap-[6px]'>
        <div className='w-20 h-5 bg-gray-200 animate-pulse'></div>
        <div className='w-[100px] h-5 bg-gray-200 animate-pulse'></div>
        <div className='flex gap-2'>
          <div className='w-[20px] h-5 bg-gray-200 animate-pulse'></div>
          <div className='w-[20px] h-5 bg-gray-200 animate-pulse'></div>
        </div>
      </div>
    </div>
  );
}
