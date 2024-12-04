import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { CustomSelectProps, Option } from './customSelect.types';

export default function CustomSelect({ options, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-between w-[120px] px-4 py-2 bg-white rounded-[12px] border border-border-select'
      >
        <span>{selectedOption.label}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      {isOpen && (
        <div className='absolute z-10 w-full mt-1 bg-white rounded-lg border border-border-select'>
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
