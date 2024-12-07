import ReplyEmpty from '@/public/icons/reply_empty.svg';

export default function NoComment() {
  return (
    <div className='w-full flex items-center justify-center mb-12 mt-10'>
      <div className='flex flex-col w-[152px] text-text-gray-primary'>
        <ReplyEmpty />
        <div className='text-center break-keep'>
          아직 댓글이 없어요. 지금 댓글을 달아보세요!
        </div>
      </div>
    </div>
  );
}
