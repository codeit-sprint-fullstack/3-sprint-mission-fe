'use client';

import { useRouter } from 'next/navigation';
import CustomSelect from '../../common/customSelect/customSelect';
import SearchInput from '../../common/searchInput/searchInput';

export default function SearchSection() {
  const options = [
    { label: '최신순', value: 'recent' },
    { label: '좋아요순', value: 'likes' },
  ];

  const router = useRouter();

  const onSearch = (word: string) => {
    if (word) return router.push(`?word=${encodeURIComponent(word)}`);
    return router.push('?');
  };

  return (
    <>
      <div className='flex gap-4 mb-6'>
        <SearchInput
          onSearch={onSearch}
          placeholder='검색할 상품을 입력해주세요'
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
