import styled from "styled-components";
import FirstMainImg from "../../../public/images/home/2.popular_product.jpg";
import SecondMainImg from "../../../public/images/home/3.search_product.jpg";
import ThirdMainImg from "../../../public/images/home/4.register_product.jpg";
import { ReactNode } from "react";

interface ITextContainer {
  $maxWidth: string;
  $align: string;
}

interface IMainPageBlockProps {
  children: ReactNode;
}

const MainPageSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPageDiv = styled.div`
  width: 100%;
  height: 72rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContentContainer = styled.div`
  background-color: ${(props) => props.theme.color.offwhite};
  max-width: 98.8rem;
  max-height: 44.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 6.4rem;
  img {
    width: 59%;
  }
`;

const TextContainer = styled.div<ITextContainer>`
  width: ${(props) => props.$maxWidth};
  text-align: ${(props) => props.$align};
  margin: 0 auto;
`;

const SubTitle = styled.div`
  color: ${(props) => props.theme.color.mainBlue};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.6rem;
  margin-bottom: 1.2rem;
`;

const MainTitle = styled.h1`
  color: ${(props) => props.theme.color.anotherBlack};
  font-size: 4rem;
  font-weight: 700;
  line-height: 5.6rem;
  margin-bottom: 2.4rem;
  word-break: keep-all;
`;

const Description = styled.p`
  color: ${(props) => props.theme.color.anotherBlack};
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 3.2rem;
  word-break: keep-all;
`;

const MainPageBlock = ({ children }: IMainPageBlockProps) => {
  return (
    <MainPageDiv>
      <MainContentContainer>{children}</MainContentContainer>
    </MainPageDiv>
  );
};

function MainPage() {
  return (
    <MainPageSection>
      <MainPageBlock>
        <img src={FirstMainImg} />
        <TextContainer $align="left" $maxWidth="28rem">
          <SubTitle>Hot item</SubTitle>
          <MainTitle>인기 상품을 확인해 보세요</MainTitle>
          <Description>가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요</Description>
        </TextContainer>
      </MainPageBlock>
      <MainPageBlock>
        <TextContainer $align="right" $maxWidth="30rem">
          <SubTitle>Search</SubTitle>
          <MainTitle>구매를 원하는 상품을 검색하세요</MainTitle>
          <Description>구매하고 싶은 물품은 검색해서 쉽게 찾아보세요</Description>
        </TextContainer>
        <img src={SecondMainImg} />
      </MainPageBlock>
      <MainPageBlock>
        <img src={ThirdMainImg} />
        <TextContainer $align="left" $maxWidth="34.1rem">
          <SubTitle>Register</SubTitle>
          <MainTitle style={{ maxWidth: "30rem" }}>판매를 원하는 상품을 등록하세요</MainTitle>
          <Description>어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요</Description>
        </TextContainer>
      </MainPageBlock>
    </MainPageSection>
  );
}

export default MainPage;
