import cn from '@/lib/cn';

export default function TextContent({
  subTitle,
  title,
  description,
  align,
}: {
  subTitle: string;
  title: string;
  description: string;
  align: 'left' | 'right';
}) {
  return (
    <div
      className={cn(
        `w-[290px] flex flex-col justify-center`,
        align === 'right' ? 'text-right' : '',
      )}
    >
      <span className='text-text-blue font-bold text-[18px] mb-3'>
        {subTitle}
      </span>
      <div className='font-bold text-[40px] break-keep mb-6'>{title}</div>
      <div className='break-keep font-medium text-2xl'>{description}</div>
    </div>
  );
}
