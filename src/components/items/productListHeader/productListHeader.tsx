'use client';

import CommonBtn from '@/components/common/commonBtn/commonBtn';
import CustomSelect from '@/components/common/customSelect/customSelect';
import SearchInput from '@/components/common/searchInput/searchInput';
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
    <div className='flex justify-between items-center mb-6'>
      <h2 className='font-bold text-xl'>판매 중인 상품</h2>
      <div className='flex gap-3'>
        <SearchInput
          className='w-[325px]'
          onSearch={onSearch}
          placeholder='검색할 상품을 입력해주세요'
        />
        <CommonBtn className='whitespace-nowrap'>상품 등록하기</CommonBtn>
        <CustomSelect
          options={options}
          onChange={() => console.log('')}
        />
      </div>
    </div>
  );
}
