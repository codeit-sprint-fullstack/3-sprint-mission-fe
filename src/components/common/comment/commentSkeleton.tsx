export default function CommentSkeleton() {
  return (
    <div className='w-full flex flex-col justify-start pb-3 bg-bg-article-normal mb-6 border-b border-b-border-normalArticle'>
      <div className='w-10 h-5 bg-gray-200 animate-pulse' />
      <div className='flex gap-2 items-center justify-center h-[40px]'>
        <div className='w-[40px] h-[40px] rounded-full bg-gray-200 animate-pulse' />
        <div className='flex flex-col justify-between h-full'>
          <div className='w-10 h-4 bg-gray-200 animate-pulse' />
          <div className='w-12 h-4 bg-gray-200 animate-pulse' />
        </div>
      </div>
    </div>
  );
}
