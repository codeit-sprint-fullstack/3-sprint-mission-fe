import React from 'react';
import SearchIcon from '../../assets/images/icons/search/search.svg';
import styled from 'styled-components';

type ProductSearchBarProps = {
  setSearchKeyword: (searchKeyword: string) => void;
};

const ProductSearchBar = ({ setSearchKeyword }: ProductSearchBarProps) => {
  const handleSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchKeyword(e.target.value);
    }
  };

  return (
    <SearchContainer>
      <SearchImage src={SearchIcon} alt="검색 아이콘" />
      <SearchInput
        placeholder="검색할 상품을 입력해주세요"
        onKeyDown={handleSearchKeyword}
      />
    </SearchContainer>
  );
};

export default ProductSearchBar;

const SearchContainer = styled.div`
  width: 32.5rem;
  height: 4.2rem;
  background-color: var(--search-bar-bg-color);
  border-radius: 1.2rem;
  position: relative;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 24.2rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    min-width: 28.8rem;
  }
`;

const SearchImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 50%;
  left: 1.6rem;
  transform: translateY(-50%);
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 4rem;
  border: none;
  background-color: transparent;
  font-size: 1.6rem;
  font-weight: 400;
  color: black;
  font-family: 'Pretendard';
  border-radius: 1.2rem;
  outline: none;

  &::placeholder {
    color: var(--search-bar-placeholder-color);
  }
`;
