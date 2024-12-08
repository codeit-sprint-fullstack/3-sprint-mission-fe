import CommonBtn from '@/components/common/commonBtn/commonBtn';
import Link from 'next/link';

export default function ArticleListHeader() {
  return (
    <div className='w-full flex justify-between items-center mb-4 md:mb-12 xl:mb-6'>
      <span className='text-[18px] md:text-[24px] xl:text-[24px] font-extrabold mb-4 md:mb-6 xl:mb-6'>
        게시글
      </span>
      <Link href='/community/write'>
        <CommonBtn>글쓰기</CommonBtn>
      </Link>
    </div>
  );
}
