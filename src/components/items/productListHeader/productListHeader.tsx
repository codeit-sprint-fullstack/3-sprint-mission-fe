'use client';

import CommonBtn from '@/components/common/commonBtn/commonBtn';
import CustomSelect from '@/components/common/customSelect/customSelect';
import SearchInput from '@/components/common/searchInput/searchInput';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const options = [
  { label: '최신순', value: 'recent' },
  { label: '좋아요순', value: 'likes' },
];

export default function ProductListHeader() {
  const router = useRouter();
  const [orderBy] = useState(options[0].value);

  const onSearch = (word: string) => {
    let queryParams = `?orderBy=${encodeURIComponent(orderBy)}`;
    if (word) queryParams += `&word=${encodeURIComponent(word)}`;
    router.push(queryParams);
  };

  return (
    <div className='flex justify-between items-center flex-wrap gap-y-2'>
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
          // 구현 예정
          onChange={() => console.log('')}
        />
      </div>
    </div>
  );
}
