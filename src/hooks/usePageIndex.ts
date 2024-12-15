import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { screenWidthAtom } from '@/lib/store/atoms';
import { useAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export default function usePageSize(maxPage: number) {
  const PAGE_SIZE = 5;
  const [screenWidth] = useAtom(screenWidthAtom);
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialPage = useMemo(() => {
    const skip = Number(searchParams.get('skip')) || 0;
    const productsPerPage =
      MEDIA_QUERY.productsPageSize[screenWidth || MEDIA_QUERY.value.large];
    return Math.floor(skip / productsPerPage) + 1;
  }, [searchParams, screenWidth]);
  const [page, setPage] = useState(initialPage);
  const [pageGroup, setPageGroup] = useState(
    Math.floor((initialPage - 1) / PAGE_SIZE),
  );

  const start = pageGroup * PAGE_SIZE + 1;
  const pageArray = Array.from(
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
    const params = new URLSearchParams(searchParams);
    const skip = (
      (page - 1) *
      MEDIA_QUERY.productsPageSize[screenWidth || MEDIA_QUERY.value.large]
    ).toString();
    params.set('skip', skip);
    router.push(`?${params.toString()}`);
  }, [page]);

  return { handlePreviousPage, handleNextPage, page, setPage, pageArray };
}
