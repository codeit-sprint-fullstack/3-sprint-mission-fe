import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { CustomSelectProps, Option } from './customSelect.types';
import { useAtom } from 'jotai';
import { screenWidthAtom } from '@/lib/store/atoms';
import DropDownIcon from '@/public/icons/drop_down_icon.svg';

export default function CustomSelect({ options, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [screenWidth] = useAtom(screenWidthAtom);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-between w-[42px] md:w-[120px] xl:w-[120px] px-[9px] md:px-4 xl:px-4 py-[9px] md:py-2 xl:py-2 bg-white rounded-[12px] border border-border-select'
      >
        {screenWidth !== 'small' ? (
          <>
            <span>{selectedOption.label}</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </>
        ) : (
          <DropDownIcon className='w-full' />
        )}
      </button>
      {isOpen && (
        <div className='absolute z-10 mt-1 bg-white rounded-lg border border-border-select w-[120px] right-0'>
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className='w-full px-4 py-2 text-center first:rounded-t-lg last:rounded-b-lg [&:not(:last-child)]:border-b border-b-border-select'
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
