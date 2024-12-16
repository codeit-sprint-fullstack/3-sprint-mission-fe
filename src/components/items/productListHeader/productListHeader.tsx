'use client';

import CommonBtn from '@/components/common/commonBtn/commonBtn';
import CustomSelect from '@/components/common/customSelect/customSelect';
import { Option } from '@/components/common/customSelect/customSelect.types';
import SearchInput from '@/components/common/searchInput/searchInput';
import { GetProductListParams } from '@/services/api/types/product';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const options = [
  { label: '최신순', value: 'recent' },
  { label: '좋아요순', value: 'favorite' },
];

export default function ProductListHeader({
  searchParams,
}: {
  searchParams: GetProductListParams;
}) {
  const router = useRouter();

  const onSearch = (word: string) => {
    const params = new URLSearchParams();
    searchParams.orderBy && params.set('orderBy', searchParams.orderBy);
    params.set('keyword', word);
    router.push(`?${params.toString()}`);
  };

  const onSelect = (option: Option) => {
    const params = new URLSearchParams();
    searchParams.keyword && params.set('keyword', searchParams.keyword);
    params.set('orderBy', option.value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className='flex justify-between items-center flex-wrap gap-y-2 mb-4 md:mb-6 xl:mb-6'>
      <h2 className='font-bold text-xl'>판매 중인 상품</h2>
      <div className='flex gap-3 flex-wrap md:flex-nowrap xl:flex-nowrap items-center'>
        <SearchInput
          className='w-[288px] md:w-[242px] xl:w-[325px] pl-10 pr-0'
          onSearch={onSearch}
          placeholder='검색할 상품을 입력해주세요'
        />
        <Link href='/items/registration'>
          <CommonBtn className='whitespace-nowrap'>상품 등록하기</CommonBtn>
        </Link>
        <CustomSelect
          options={options}
          onChange={onSelect}
        />
      </div>
    </div>
  );
}
