'use client';

import { MEDIA_QUERY } from '@/constants/mediaQuery';
import cn from '@/lib/cn';
import { screenWidthAtom } from '@/lib/store/atoms';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAtom } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const BUTTON_STYLE =
  'w-10 h-10 rounded-full border border-border-index-button text-text-charcoal-primary font-bold';

const SELECTED_STYLE = 'text-text-white-secondary bg-bg-button-active';

export default function PageIndex({ maxPage }: { maxPage: number }) {
  const PAGE_SIZE = 5;
  const [pageGroup, setPageGroup] = useState(0);
  const [page, setPage] = useState(1);
  const [screenWidth] = useAtom(screenWidthAtom);
  const searchParams = useSearchParams();
  const router = useRouter();
  const skip = useMemo(() => {
    return (
      (page - 1) *
      MEDIA_QUERY.productsPageSize[screenWidth || MEDIA_QUERY.value.large]
    ).toString();
  }, [page]);

  const start = pageGroup * PAGE_SIZE + 1;
  const array = Array.from(
    { length: Math.min(PAGE_SIZE, maxPage) },
    (_, index) => start + index,
  );

  const handlePreviousPage = () => {
    setPageGroup((prevValue) => Math.max(prevValue - 1, 0));
    setPage((prev) => Math.max(prev - PAGE_SIZE, 1));
  };

  const handleNextPage = () => {
    setPageGroup((prevValue) => prevValue + 1);
    setPage((prev) => prev + PAGE_SIZE);
  };

  useEffect(() => {
    if (skip === '0') return;
    const params = new URLSearchParams(searchParams);
    params.set('skip', skip);
    router.push(`?${params.toString()}`);
  }, [page]);

  return (
    <div className='flex items-center gap-1'>
      <button
        className={cn(BUTTON_STYLE)}
        onClick={handlePreviousPage}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {array.map((number) => (
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
