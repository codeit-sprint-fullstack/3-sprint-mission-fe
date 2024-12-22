export default function ProductInformationSkeleton() {
  return (
    <section className='flex w-full gap-6 pb-10 border-b'>
      <div className='w-[343px] md:w-[343px] xl:w-[486px] aspect-square relative flex-shrink-0 bg-gray-200 animate-pulse' />
      <div className='w-full flex flex-col justify-between gap-4'>
        <div className='flex gap-4 flex-col'>
          <div className='flex flex-col border-b gap-4 pb-4'>
            <div className='flex justify-between items-center bg-gray-200 w-[150px] h-10 animate-pulse' />
            <span className='font-semibold text-[40px] bg-gray-200 w-[250px] h-12 animate-pulse' />
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='font-semibold'>상품 소개</h2>
            <div className='w-[150px] h-8 bg-gray-200 animate-pulse' />
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='font-semibold'>상품 태그</h2>
            <div className='flex gap-2'>
              <div className='w-[60px] rounded-full h-8 bg-gray-200 animate-pulse' />
              <div className='w-[60px] rounded-full h-8 bg-gray-200 animate-pulse' />
              <div className='w-[60px] rounded-full h-8 bg-gray-200 animate-pulse' />
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center justify-center h-[40px]'>
            <div className='w-[40px] h-[40px] rounded-full bg-gray-200 animate-pulse' />
            <div className='flex flex-col justify-between h-full'>
              <div className='w-10 h-4 bg-gray-200 animate-pulse' />
              <div className='w-12 h-4 bg-gray-200 animate-pulse' />
            </div>
          </div>
          <div className='w-[67px] rounded-full h-[33.8px] bg-gray-200 animate-pulse' />
        </div>
      </div>
    </section>
  );
}
