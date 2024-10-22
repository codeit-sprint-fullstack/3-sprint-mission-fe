import styled from "styled-components";

const LoginButton = styled.a`
  color: ${(props) => props.theme.color.mainIvory};
  background-color: ${(props) => props.theme.color.mainBlue};
  &:disabled {
    background-color: ${(props) => props.theme.color.mainGrey};
  }
  width: 8.8rem;
  height: 4.2rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  line-height: 2.1rem;
  font-weight: 600;
  text-align: center;
  padding: 1.2rem 2.3rem;
`;

export default LoginButton;
