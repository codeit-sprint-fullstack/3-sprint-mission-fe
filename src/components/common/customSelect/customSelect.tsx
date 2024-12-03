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

// nterface ISelectProps {
//     selectedOption: string;
//     setOption: ReturnType<
//       typeof useSetAtom<WritableAtom<ProductSortOption, [SetStateAction<ProductSortOption>], void>>
//     >;
//     optionsString: string[];
//     optionsValue: ProductSortOption[];
//     screenWidth: ScreenWidth;
//   }

//   interface OptionContainerProps {
//     $isOpen: boolean;
//   }

//   const SelectContainer = styled.div`
//     position: relative;
//     width: 13rem;
//   `;

//   const SelectButton = styled.button`
//     cursor: pointer;
//     font-size: 1.6rem;
//     font-weight: 400;
//     color: ${(props) => props.theme.color.mainBlack};
//     width: 13rem;
//     height: 4.2rem;
//     display: flex;
//     justify-content: space-between;
//     border: 0.1rem solid ${(props) => props.theme.color.anotherIvory};
//     background-color: ${(props) => props.theme.color.white};
//     border-radius: 1.2rem;
//     padding: 1.2rem 2.4rem 1.2rem 2rem;
//   `;

//   const DropdownButtonContainer = styled.div`
//     width: 4.2rem;
//     height: 4.2rem;
//     border: 0.1rem solid ${(props) => props.theme.color.anotherIvory};
//     background-color: ${(props) => props.theme.color.white};
//     border-radius: 1.2rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     img {
//       width: 1.7rem;
//     }
//   `;

//   const OptionContainer = styled.div<OptionContainerProps>`
//     position: absolute;
//     width: 100%;
//     top: 100%;
//     left: 0;
//     right: 0;
//     margin-top: 0.8rem;
//     display: ${(props) => (props.$isOpen ? "block" : "none")};
//   `;

//   const Option = styled.div`
//     cursor: pointer;
//     text-align: center;
//     font-size: 1.6rem;
//     font-weight: 400;
//     border: 0.1rem solid ${(props) => props.theme.color.anotherIvory};
//     background-color: ${(props) => props.theme.color.white};
//     padding: 1.2rem 2rem;
//     &:first-child {
//       border-radius: 1.2rem 1.2rem 0 0;
//     }
//     &:last-child {
//       border-radius: 0 0 1.2rem 1.2rem;
//     }
//   `;

//   function Select({
//     selectedOption,
//     setOption,
//     optionsString,
//     optionsValue,
//     screenWidth,
//   }: ISelectProps) {
//     const [isOpen, setIsOpen] = useState(false);
//     const handleSelect = (option: ProductSortOption) => {
//       setOption(option);
//       setIsOpen(false);
//     };

//     return (
//       <SelectContainer>
//         {screenWidth === MEDIA_QUERY.value.small ? (
//           <DropdownButtonContainer onClick={() => setIsOpen(!isOpen)}>
//             <img src={DropDown} />
//           </DropdownButtonContainer>
//         ) : (
//           <SelectButton onClick={() => setIsOpen(!isOpen)}>
//             {selectedOption}
//             <FontAwesomeIcon icon={faCaretDown} />
//           </SelectButton>
//         )}
//         <OptionContainer $isOpen={isOpen}>
//           {optionsString.map((option, index) => (
//             <Option key={option} onClick={() => handleSelect(optionsValue[index])}>
//               {option}
//             </Option>
//           ))}
//         </OptionContainer>
//       </SelectContainer>
//     );
//   }
