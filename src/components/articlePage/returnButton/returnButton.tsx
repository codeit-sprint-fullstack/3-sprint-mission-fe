import CommonBtn from '@/components/common/commonBtn/commonBtn';
import Link from 'next/link';
import ArrowLeftIcon from '@/public/icons/arrow_left_icon.svg';

export default function ReturnButton() {
  return (
    <div className='w-full flex justify-center mb-[200px]'>
      <Link href='/community'>
        <CommonBtn className='rounded-[40px] px-[64px] py-[12px] font-bold text-[18px] flex items-center gap-2'>
          <span>목록으로 돌아가기</span>
          <ArrowLeftIcon />
        </CommonBtn>
      </Link>
    </div>
  );
}
