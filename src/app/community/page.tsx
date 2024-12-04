import CommonBtn from '@/components/common/commonBtn/commonBtn';
import BestArticleListSection from '@/components/community/bestArticle/bestArticleListSection';
import NormalArticleListSection from '@/components/community/normalArticle/normalArticleListSection';
import SearchSection from '@/components/community/searchSection/searchSection';
import { SearchParams } from '@/lib/types/searchParams';

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className='w-full md:w-full xl:w-[1248px] p-4 md:p-6 xl:p-6 flex flex-col'>
      <span className='text-[18px] md:text-[24px] xl:text-[24px] font-extrabold mb-4 md:mb-6 xl:mb-6'>
        베스트 게시글
      </span>
      <div className='flex gap-6 mb-10 overflow-auto'>
        <BestArticleListSection />
      </div>
      <div className='w-full flex justify-between items-center mb-4 md:mb-12 xl:mb-6'>
        <span className='text-[18px] md:text-[24px] xl:text-[24px] font-extrabold mb-4 md:mb-6 xl:mb-6'>
          게시글
        </span>
        <CommonBtn>글쓰기</CommonBtn>
      </div>
      <SearchSection />
      <div className='flex flex-col gap-6'>
        <NormalArticleListSection searchParams={searchParams} />
      </div>
    </div>
  );
}
