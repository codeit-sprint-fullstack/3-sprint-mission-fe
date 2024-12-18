import ReplyEmpty from '@/public/icons/reply_empty.svg';
import InquiryEmpty from '@/public/icons/inquiry_empty.svg';

const TEXT = {
  product: '아직 문의가 없어요',
  article: '아직 댓글이 없어요. 지금 댓글을 달아보세요!',
};

export default function NoComment({
  variant,
}: {
  variant: 'product' | 'article';
}) {
  return (
    <div className='w-full flex items-center justify-center mb-12 mt-10'>
      <div className='flex flex-col w-[152px] text-text-gray-primary items-center'>
        {variant === 'product' ? <InquiryEmpty /> : <ReplyEmpty />}
        <div className='text-center break-keep'>{TEXT[variant]}</div>
      </div>
    </div>
  );
}
