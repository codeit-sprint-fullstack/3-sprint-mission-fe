import { createPortal } from 'react-dom';
import { ModalProps } from './types';
import { useEffect, useState } from 'react';
import CommonBtn from '../common/commonBtn/commonBtn';

export default function Modal({
  modalOpen,
  setModalOpen,
  message,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !modalOpen) return null;

  return createPortal(
    <div className='absolute inset-0 bg-black/70 z-10'>
      <div
        className={
          'px-[67.5px] md:px-[162px] xl:px-[162px] py-[52px] md:py-[68px] xl:py-[68px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-20'
        }
      >
        <div
          className={'w-full flex flex-col items-center justify-center gap-10'}
        >
          <div>{message}</div>
          <CommonBtn
            className='rounded-lg w-[120px] md:w-[165px] xl:w-[165px] h-[48px]'
            onClick={() => setModalOpen(false)}
          >
            확인
          </CommonBtn>
        </div>
      </div>
    </div>,
    document.body,
  );
}
