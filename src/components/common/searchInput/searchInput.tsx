import cn from '@/lib/cn';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputHTMLAttributes } from 'react';

export default function SearchInput({
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className='w-full relative'>
      <input
        className={cn(
          'bg-bg-input w-full px-[44px] py-[9px] rounded-[12px] text-text-charcoal-primary',
          className,
        )}
        {...props}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className='absolute left-5 top-[13px] text-bg-inputGlass cursor-pointer'
      />
    </div>
  );
}
