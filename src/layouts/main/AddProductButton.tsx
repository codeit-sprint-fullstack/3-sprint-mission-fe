import React from 'react';
import styled from 'styled-components';

const AddProductButton = () => {
  return <Button>상품 등록하기</Button>;
};

export default AddProductButton;

const Button = styled.button`
  background-color: var(--primary-blue-color);
  color: white;
  border-radius: 0.8rem;
  border: none;
  padding: 1.2rem 2.3rem;
  font-family: 'Pretendard';
  font-size: 1.6rem;
  font-weight: 500;
  white-space: nowrap;
`;
