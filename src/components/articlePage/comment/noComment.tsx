import ReplyEmpty from '@/public/icons/reply_empty.svg';
import InquiryEmpty from '@/public/icons/inquiry_empty.svg';
import { NO_COMMENT_TEXT } from '@/constants/messages';

export default function NoComment({
  variant,
}: {
  variant: 'product' | 'article';
}) {
  return (
    <div className='w-full flex items-center justify-center mb-12 mt-10'>
      <div className='flex flex-col w-[152px] text-text-gray-primary items-center'>
        {variant === 'product' ? <InquiryEmpty /> : <ReplyEmpty />}
        <div className='text-center break-keep'>{NO_COMMENT_TEXT[variant]}</div>
      </div>
    </div>
  );
}
