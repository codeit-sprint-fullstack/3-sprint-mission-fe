'use client';

import { openMenuIdAtom } from '@/lib/store/atoms';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAtom } from 'jotai';
import { ActionMenuProps } from './actionMenu.types';

export default function ActionMenu({
  id,
  onEditButtonClick,
  onDeleteButtonClick,
}: ActionMenuProps) {
  const [openMenuId, setOpenMenuId] = useAtom(openMenuIdAtom);

  const handleClick = () => {
    if (openMenuId === id) return setOpenMenuId(null);
    setOpenMenuId(id);
  };

  return (
    <div className='relative'>
      <FontAwesomeIcon
        onClick={handleClick}
        icon={faEllipsisV}
        className='p-[10px] text-text-gray-primary cursor-pointer'
      />
      {openMenuId === id && (
        <div className='rounded-lg flex flex-col items-center border border-x-border-select absolute bg-white w-[102px] md:w-[139px] xl:w-[139px] z-10 right-0'>
          <button
            className='px-[30px] py-[11px] '
            onClick={() => {
              onEditButtonClick();
              handleClick();
            }}
          >
            수정하기
          </button>
          <button
            className='px-[30px] py-[11px]'
            onClick={() => {
              onDeleteButtonClick();
              handleClick();
            }}
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
