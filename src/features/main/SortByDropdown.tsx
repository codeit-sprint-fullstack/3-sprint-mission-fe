import React from 'react';
import styled from 'styled-components';

type SortByDropdownProps = {
  setOrderBy: (orderBy: string) => void;
};

const SortByDropdown = ({ setOrderBy }: SortByDropdownProps) => {
  const handleOrderByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
  };

  return (
    <Select onChange={handleOrderByChange}>
      <Option value="recent">최신순</Option>
      <Option value="favorite">좋아요순</Option>
    </Select>
  );
};

export default SortByDropdown;

const Select = styled.select`
  border: 1px solid var(--select-border-color);
  border-radius: 1.2rem;
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: 'Pretendard';
`;

const Option = styled.option``;
