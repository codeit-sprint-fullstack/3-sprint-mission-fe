import { MEDIA_QUERY } from '@/constants/mediaQuery';
import { screenWidthAtom } from '@/lib/store/atoms';
import { useAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function usePageSize(maxPage: number) {
  const SIZE_PER_GROUP = 5;
  const [screenWidth] = useAtom(screenWidthAtom);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageSize =
    MEDIA_QUERY.productsPageSize[screenWidth || MEDIA_QUERY.value.large];
  const initialPage = Number(searchParams.get('page')) || 1;
  const [page, setPage] = useState(initialPage);
  const [pageGroup, setPageGroup] = useState(
    Math.floor((initialPage - 1) / SIZE_PER_GROUP),
  );

  const start = pageGroup * SIZE_PER_GROUP + 1;
  const pageArray = Array.from(
    { length: SIZE_PER_GROUP },
    (_, index) => start + index,
  ).filter((number) => number <= maxPage);

  const handlePreviousPage = () => {
    setPageGroup((prevValue) => Math.max(prevValue - 1, 0));
    setPage((prev) => Math.max(prev - SIZE_PER_GROUP, 1));
  };

  const handleNextPage = () => {
    setPageGroup((prevValue) =>
      Math.min(prevValue + 1, Math.floor(maxPage / SIZE_PER_GROUP)),
    );
    setPage((prev) => Math.min(prev + SIZE_PER_GROUP, maxPage));
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    params.set('pageSize', pageSize.toString());
    router.push(`?${params.toString()}`);
  }, [page]);

  return { handlePreviousPage, handleNextPage, page, setPage, pageArray };
}
