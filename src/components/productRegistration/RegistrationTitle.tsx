import styled from "styled-components";

const RegistrationTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

const RegistrationTitleH1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3.2rem;
`;

const RegistrationButton = styled.button`
  width: 7.4rem;
  height: 4.2rem;
  &:disabled {
    background-color: ${(props) => props.theme.color.mainGrey};
  }
`;

const RegistrationTitle = () => {
  return (
    <RegistrationTitleContainer>
      <RegistrationTitleH1>상품 등록하기</RegistrationTitleH1>
      <RegistrationButton disabled type="submit">
        등록
      </RegistrationButton>
    </RegistrationTitleContainer>
  );
};

export default RegistrationTitle;
