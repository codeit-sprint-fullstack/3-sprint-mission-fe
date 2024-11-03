import styled from 'styled-components';
import feature1Image from '../../assets/images/home/feature1-image.png';
import feature2Image from '../../assets/images/home/feature2-image.png';
import feature3Image from '../../assets/images/home/feature3-image.png';

const IntroSection = () => {
  return (
    <Main>
      <section className="item">
        <ItemContainer>
          <ItemImage src={feature1Image} alt="인기 상품 이미지" />
          <ItemContent>
            <Strong>Hot item</Strong>
            <ItemTitle $maxWidth="22rem">인기 상품을 확인해 보세요</ItemTitle>
            <ItemSubtitle>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </ItemSubtitle>
          </ItemContent>
        </ItemContainer>
      </section>

      <section className="item">
        <ItemContainer $reverse>
          <ItemImage src={feature2Image} alt="검색 이미지" />
          <ItemContent $alignEnd>
            <Strong>Search</Strong>
            <ItemTitle>구매를 원하는 상품을 검색하세요</ItemTitle>
            <ItemSubtitle>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </ItemSubtitle>
          </ItemContent>
        </ItemContainer>
      </section>

      <section className="item">
        <ItemContainer>
          <ItemImage src={feature3Image} alt="등록 이미지" />
          <ItemContent>
            <Strong>Register</Strong>
            <ItemTitle>판매를 원하는 상품을 등록하세요</ItemTitle>
            <ItemSubtitle>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </ItemSubtitle>
          </ItemContent>
        </ItemContainer>
      </section>
    </Main>
  );
};

export default IntroSection;

const Main = styled.main`
  .item {
    max-height: 72rem;
    padding: 13.8rem 0;

    @media (min-width: 744px) and (max-width: 1199px) {
      max-height: none;
      padding: 5.2rem 0;
    }

    @media (max-width: 743px) {
      max-height: none;
      padding: 2rem 0;
    }
  }
`;

const ItemContainer = styled.div<{ reverse?: boolean }>`
  max-width: 98.8rem;
  display: flex;
  margin: 0 auto;
  gap: 4rem;
  background-color: #fcfcfc;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};

  @media (min-width: 744px) and (max-width: 1199px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin: 0 2.4rem;
    background-color: white;
  }

  @media (max-width: 743px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin: 0 2.4rem;
    background-color: white;
    gap: 2.4rem;
  }
`;

const ItemImage = styled.img`
  max-width: 58.8rem;
  width: 60%;
  height: auto;
  object-fit: contain;

  @media (min-width: 744px) and (max-width: 1199px), (max-width: 743px) {
    max-width: 100%;
    width: 100%;
  }
`;

const ItemContent = styled.div<{ alignEnd?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${(props) => (props.alignEnd ? 'end' : 'start')};
  word-break: keep-all;
  height: 23.8rem;
  margin: auto 0;
  width: 40%;
  text-align: ${(props) => (props.alignEnd ? 'right' : 'left')};

  @media (min-width: 744px) and (max-width: 1199px) {
    width: 100%;
    justify-content: initial;
  }

  @media (max-width: 743px) {
    width: 100%;
    justify-content: initial;
    height: auto;
  }
`;

const Strong = styled.strong`
  font-weight: bold;
  font-size: 1.8rem;
  color: var(--primary-blue-color);
  margin-bottom: 2rem;

  @media (max-width: 743px) {
    margin-bottom: 0;
  }
`;

const ItemTitle = styled.h2<{ maxWidth?: string }>`
  font-size: 4rem;
  font-weight: 700;
  line-height: 5.6rem;
  margin-bottom: 3rem;
  max-width: ${(props) => props.maxWidth || '32rem'};

  @media (min-width: 744px) and (max-width: 1199px) {
    max-width: none;
  }

  @media (max-width: 743px) {
    max-width: none;
    font-size: 2.4rem;
    margin-bottom: 0;
  }
`;

const ItemSubtitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 3.2rem;

  @media (max-width: 743px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;
