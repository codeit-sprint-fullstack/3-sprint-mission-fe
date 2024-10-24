import styled from "styled-components";

export const Input = styled.input`
  padding: 0.9rem 2rem 0.9rem 1.6rem;
  border-radius: 1.2rem;
  width: 32.5rem;
  ::placeholder {
    font-size: 1.6rem;
    color: ${(props) => props.theme.color.mainGrey};
    line-height: 2.4rem;
    font-weight: 400;
  }
`;
