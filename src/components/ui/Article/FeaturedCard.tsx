import Image from 'next/image';

// const FeaturedCard = async ({ article }) => {
const FeaturedCard = async ({ article }) => {
  // const article = {
  //   id: 1,
  //   image: "/image.png",
  //   title: "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?",
  //   username: "총명한판다",
  //   likes: 10592,
  //   date: "2024-04-16",
  // };
  console.log(article);
  if (!article) return null;
  article.likes = article.likes > 10000 ? '9999+' : article.likes;
  return (
    <div className='feature-article-container max-w-96 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-50 hover:scale-105 transition-all hover:shadow-xl'>
      <div className='feature-article-card relative flex flex-col justify-center px-6'>
        {/* Badge */}
        <div className='badge absolute top-0 flex h-[1.875rem] items-center justify-center rounded-b-2xl bg-brand_blue px-6 py-0.5 text-sm font-bold leading-[1.875rem] text-white'>
          <Image
            src='/medal.svg'
            alt='medal'
            width={16}
            height={16}
          />
          <span className='ml-1 mr-1 font-semibold leading-none text-white'>
            Best
          </span>
        </div>
        <div className='feature-article-body flex items-center gap-x-1.5 pt-[2.875rem]'>
          <h2 className='line-clamp-2 h-14 overflow-ellipsis text-xl font-semibold tracking-tighter'>
            {article.title}
          </h2>
          <div className='image-container border-gray200 relative flex h-[4.5rem] min-w-[4.5rem] basis-[4.5rem] items-center justify-center rounded-md border p-3'>
            <Image
              src={article.image}
              alt={article.title}
              fill={true}
              className='max-h-12 max-w-12 center-img'
            />
          </div>
        </div>
        <div className='feature-meta flex justify-between py-4 text-sm text-gray-600'>
          <div className='flex gap-x-2'>
            <span>{article.username}</span>
            <div className='flex gap-x-1 text-gray-500'>
              <Image
                src='/heart.svg'
                alt='heart'
                width={16}
                height={16}
                className='stroke-red-600'
              />
              <span className='likes'>{article.likes}</span>
            </div>
          </div>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
