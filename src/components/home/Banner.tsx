import styled from "styled-components";
import { ReactNode } from "react";

const BannerSection = styled.section`
  width: 100%;
  height: 54rem;
  background-color: ${(props) => props.theme.color.anotherBlue};
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const BannerContainer = styled.div`
  max-width: 111rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 67.2%;
  max-width: 74.6rem;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

function Banner({ image, children }: { image: string; children: ReactNode }) {
  return (
    <BannerSection>
      <BannerContainer>
        {children}
        <ImageContainer>
          <img src={image} />
        </ImageContainer>
      </BannerContainer>
    </BannerSection>
  );
}

export default Banner;
