import cn from '@/lib/cn';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchInputProps } from './searchInput.types';
import { useState } from 'react';

export default function SearchInput({
  className = '',
  onSearch,
  ...props
}: SearchInputProps) {
  const [word, setWord] = useState('');

  return (
    <div className='w-full relative'>
      <input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className={cn(
          'bg-bg-input w-full px-[44px] py-[9px] rounded-[12px] text-text-charcoal-primary',
          className,
        )}
        {...props}
      />
      <FontAwesomeIcon
        onClick={() => onSearch(word)}
        icon={faMagnifyingGlass}
        className='absolute left-5 top-[13px] text-bg-inputGlass cursor-pointer'
      />
    </div>
  );
}
