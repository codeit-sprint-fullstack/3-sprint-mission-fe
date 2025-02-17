'use client';

// import { createPortal } from 'react-dom';
import CheckIcon from '@/public/icons/ic_check.svg';
// import { useConfirmModal } from '@/hooks/modals/useConfirmModal';
import { useModal } from '@/hooks/modals/useModal';

export default function ConfirmModal() {
  const { message, closeModal, onButtonClick } = useModal();

  return (
    <div className='fixed inset-0 bg-black/70 z-10'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-20 p-6'>
        <div
          className={
            'w-[250px] flex flex-col items-center justify-center gap-10'
          }
        >
          <div className='flex flex-col justify-center items-center gap-6'>
            <CheckIcon />
            <div>{message}</div>
          </div>
          <div className='flex gap-2'>
            <button
              onClick={closeModal}
              className='py-3 px-[23px] border border-border-input-error rounded-xl text-text-red bg-text-white-secondary'
            >
              취소
            </button>
            <button
              onClick={() => {
                if (onButtonClick !== null) {
                  onButtonClick();
                  closeModal();
                }
              }}
              className='py-3 px-[23px] rounded-xl bg-text-red text-text-white'
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
