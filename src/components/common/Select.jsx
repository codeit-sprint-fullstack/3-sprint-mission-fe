import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import DropDown from "../../../public/icons/DropDown.png";
import { MEDIA_QUERY } from "../../constants/mediaQuery";

const SelectContainer = styled.div`
  position: relative;
  width: 13rem;
`;

const SelectButton = styled.button`
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.mainBlack};
  width: 13rem;
  height: 4.2rem;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid ${(props) => props.theme.color.anotherIvory};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 1.2rem;
  padding: 1.2rem 2.4rem 1.2rem 2rem;
`;

const DropdownButtonContainer = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  border: 0.1rem solid ${(props) => props.theme.color.anotherIvory};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 1.7rem;
  }
`;

const OptionContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.8rem;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

const Option = styled.div`
  cursor: pointer;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
  border: 0.1rem solid ${(props) => props.theme.color.anotherIvory};
  background-color: ${(props) => props.theme.color.white};
  padding: 1.2rem 2rem;
  &:first-child {
    border-radius: 1.2rem 1.2rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 1.2rem 1.2rem;
  }
`;

function Select({ selectedOption, setOption, options, screenWidth }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (option) => {
    setOption(option);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      {screenWidth === MEDIA_QUERY.value.small ? (
        <DropdownButtonContainer onClick={() => setIsOpen(!isOpen)}>
          <img src={DropDown} />
        </DropdownButtonContainer>
      ) : (
        <SelectButton onClick={() => setIsOpen(!isOpen)}>
          {selectedOption}
          <FontAwesomeIcon icon={faCaretDown} />
        </SelectButton>
      )}
      <OptionContainer $isOpen={isOpen}>
        {options.map((option) => (
          <Option key={option} onClick={() => handleSelect(option)}>
            {option}
          </Option>
        ))}
      </OptionContainer>
    </SelectContainer>
  );
}

Select.propTypes = {
  selectedOption: PropTypes.string,
  setOption: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  screenWidth: PropTypes.string,
};

export default Select;
