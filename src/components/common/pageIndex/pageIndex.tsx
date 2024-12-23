'use client';

import usePageSize from '@/hooks/usePageIndex';
import cn from '@/lib/cn';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BUTTON_STYLE =
  'w-10 h-10 rounded-full border border-border-index-button text-text-charcoal-primary font-bold';

const SELECTED_STYLE = 'text-text-white-secondary bg-bg-button-active';

export default function PageIndex({ maxPage }: { maxPage: number }) {
  const { page, setPage, handlePreviousPage, handleNextPage, pageArray } =
    usePageSize(maxPage);

  return (
    <div className='flex items-center gap-1'>
      <button
        className={cn(BUTTON_STYLE)}
        onClick={handlePreviousPage}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {pageArray.map((number) => (
        <button
          key={number}
          className={cn(BUTTON_STYLE, page === number && SELECTED_STYLE)}
          onClick={() => setPage(number)}
        >
          {number}
        </button>
      ))}
      <button
        className={cn(BUTTON_STYLE)}
        onClick={handleNextPage}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}
