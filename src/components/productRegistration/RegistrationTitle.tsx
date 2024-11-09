import { useAtomValue } from "jotai";
import styled from "styled-components";
import { productFormState } from "../../jotai/atoms/productFormState";

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
  const productForm = useAtomValue(productFormState);
  const disabled = Object.entries(productForm).some((array) => !array[1].length);

  return (
    <RegistrationTitleContainer>
      <RegistrationTitleH1>상품 등록하기</RegistrationTitleH1>
      <RegistrationButton disabled={disabled} type="submit">
        등록
      </RegistrationButton>
    </RegistrationTitleContainer>
  );
};

export default RegistrationTitle;
