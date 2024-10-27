import styled from "styled-components";

const Button = styled.a`
  color: ${(props) => props.theme.color.mainIvory};
  background-color: ${(props) => props.theme.color.mainBlue};
  &:disabled {
    background-color: ${(props) => props.theme.color.mainGrey};
  }
  width: ${(props) => props.$size};
  border-radius: 0.8rem;
  font-size: 1.6rem;
  line-height: 2.1rem;
  font-weight: 600;
  text-align: center;
  padding: 1.2rem 2.3rem;
  cursor: pointer;
`;

export default Button;