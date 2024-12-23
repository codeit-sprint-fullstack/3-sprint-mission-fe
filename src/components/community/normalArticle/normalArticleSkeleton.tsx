export default function NormalArticleCardSkeleton() {
  return (
    <div className='w-full h-[138px] flex flex-col items-start bg-bg-article-normal border-b border-b-border-normalArticle animate-pulse'>
      <div className='w-full flex justify-between'>
        <div className='flex flex-col gap-2 flex-1 mr-4'>
          <div className='h-6 bg-gray-200 rounded w-3/4' />
        </div>
        <div className='w-[72px] h-[72px] bg-gray-200 rounded-[6px] border border-border-image' />
      </div>

      <div className='flex justify-between w-full mt-4'>
        <div className='flex items-center gap-2'>
          <div className='w-6 h-6 bg-gray-200 rounded-full' />
          <div className='flex flex-row gap-1'>
            <div className='h-4 bg-gray-200 rounded w-10' />
            <div className='h-4 bg-gray-200 rounded w-[90px]' />
          </div>
        </div>
        <div className='h-6 bg-gray-200 rounded w-16' />
      </div>
    </div>
  );
}
