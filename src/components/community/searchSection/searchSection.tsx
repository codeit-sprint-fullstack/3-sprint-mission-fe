'use client';

import { useRouter } from 'next/navigation';
import CustomSelect from '../../common/customSelect/customSelect';
import SearchInput from '../../common/searchInput/searchInput';
import { useState } from 'react';

const options = [
  { label: '최신순', value: 'recent' },
  { label: '좋아요순', value: 'likes' },
];

export default function SearchSection() {
  const [orderBy] = useState(options[0].value);

  const router = useRouter();

  const onSearch = (word: string) => {
    let queryParams = `?orderBy=${encodeURIComponent(orderBy)}`;
    if (word) queryParams += `&word=${encodeURIComponent(word)}`;
    router.push(queryParams);
  };

  return (
    <>
      <div className='flex gap-4 mb-6'>
        <SearchInput
          onSearch={onSearch}
          placeholder='검색할 게시글을 입력해주세요'
        />
        <CustomSelect
          options={options}
          // 구현 예정
          onChange={(option) => console.log(option)}
        />
      </div>
    </>
  );
}
