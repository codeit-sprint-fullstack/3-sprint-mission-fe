import { createPortal } from 'react-dom';
import { ModalProps } from './types';
import { useEffect, useState } from 'react';
import CommonBtn from '../common/commonBtn/commonBtn';
import cn from '@/lib/cn';
import CheckIcon from '@/public/icons/ic_check.svg';

const CONDITIONAL_STYLE = {
  error:
    'px-[67.5px] md:px-[162px] xl:px-[162px] py-[52px] md:py-[68px] xl:py-[68px]',
  confirm: 'p-6',
};

export default function Modal({
  variant,
  modalOpen,
  setModalOpen,
  message,
  onConfirm,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !modalOpen) return null;

  return createPortal(
    <div className='fixed inset-0 bg-black/70 z-10'>
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-20',
          CONDITIONAL_STYLE[variant],
        )}
      >
        <div
          className={'w-full flex flex-col items-center justify-center gap-10'}
        >
          <div className='flex flex-col justify-center items-center gap-6'>
            {variant === 'confirm' && <CheckIcon />}
            <div>{message}</div>
          </div>
          {variant === 'confirm' && onConfirm ? (
            <div className='flex gap-2'>
              <button
                onClick={() => setModalOpen(false)}
                className='py-3 px-[23px] border border-border-input-error rounded-xl text-text-red bg-text-white-secondary'
              >
                취소
              </button>
              <button
                onClick={() => onConfirm()}
                className='py-3 px-[23px] rounded-xl bg-text-red text-text-white'
              >
                확인
              </button>
            </div>
          ) : (
            <CommonBtn
              className='rounded-lg w-[120px] md:w-[165px] xl:w-[165px] h-[48px]'
              onClick={() => setModalOpen(false)}
            >
              확인
            </CommonBtn>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
