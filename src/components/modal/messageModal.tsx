'use client';

import { useModal } from '@/hooks/modals/useModal';
import CommonBtn from '../common/commonBtn/commonBtn';
import cn from '@/lib/cn';

export default function MessageModal() {
  const { message, closeModal, onButtonClick } = useModal();

  return (
    <div className='fixed inset-0 bg-black/70 z-10'>
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-20',
          'px-[67.5px] md:px-[162px] xl:px-[162px] py-[52px] md:py-[68px] xl:py-[68px]',
        )}
      >
        <div
          className={'w-full flex flex-col items-center justify-center gap-10'}
        >
          <div className='flex flex-col justify-center items-center gap-6'>
            <div>{message}</div>
          </div>
          <CommonBtn
            className='rounded-lg w-[120px] md:w-[165px] xl:w-[165px] h-[48px]'
            onClick={() => {
              closeModal();
              if (onButtonClick) onButtonClick();
            }}
          >
            확인
          </CommonBtn>
        </div>
      </div>
    </div>
  );
}
