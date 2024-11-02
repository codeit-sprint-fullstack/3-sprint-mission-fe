import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <ButtonS>{children}</ButtonS>;
};

export default Button;

const ButtonS = styled.button`
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
