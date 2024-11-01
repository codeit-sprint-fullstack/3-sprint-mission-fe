import styled from "styled-components";
import Banner from "../components/home/Banner";
import TopBannerImg from "../../public/images/home/Img_home_top.png";
import BottomBannerImg from "../../public/images/home/Img_home_bottom.png";
import MainPage from "../components/home/MainPage";

const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10rem;
  max-width: 35.7rem;
`;

const BannerTextContainerBottm = styled(BannerTextContainer)`
  max-width: 33.5rem;
  margin-bottom: 17.25rem;
`;

const BannerText = styled.p`
  color: ${(props) => props.theme.color.anotherBlack};
  font-size: 4rem;
  font-weight: 700;
  line-height: 5.6rem;
  word-break: keep-all;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35.7rem;
  height: 5.6rem;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 3.2rem;
  border-radius: 4rem;
`;

function Home() {
  return (
    <>
      <main>
        <Banner image={TopBannerImg}>
          <BannerTextContainer>
            <BannerText>일상의 모든 물건을 거래해 보세요</BannerText>
            <Button>구경하러 가기</Button>
          </BannerTextContainer>
        </Banner>
        <MainPage />
        <Banner image={BottomBannerImg}>
          <BannerTextContainerBottm>
            <BannerText>믿을 수 있는 판다마켓 중고 거래</BannerText>
          </BannerTextContainerBottm>
        </Banner>
      </main>
    </>
  );
}

export default Home;
