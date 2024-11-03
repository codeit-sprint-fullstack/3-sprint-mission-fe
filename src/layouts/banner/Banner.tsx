import styled from 'styled-components';
import { Link } from 'react-router-dom';

type BannerProps = {
  title: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  isFooter?: boolean;
};

const Banner = ({
  title,
  buttonText,
  buttonLink,
  imageSrc,
  isFooter,
}: BannerProps) => {
  return (
    <BannerSection>
      <BannerContainer>
        <BannerContent>
          <BannerTitle dangerouslySetInnerHTML={{ __html: title }} />
          {!isFooter && (
            <Link to={buttonLink || '/'}>
              <BannerButton>{buttonText}</BannerButton>
            </Link>
          )}
        </BannerContent>
        <BannerImage>
          <img src={imageSrc || ''} alt={title} />
        </BannerImage>
      </BannerContainer>
    </BannerSection>
  );
};

export default Banner;

// Styled Components
const BannerSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 54rem;
  background-color: var(--home-banner-bh-color);
  margin-top: 7rem;

  @media (min-width: 744px) and (max-width: 1199px) {
    height: 77rem;
  }

  @media (max-width: 743px) {
    height: 54rem;
  }
`;

const BannerContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: center;
    justify-content: end;
  }
`;

const BannerContent = styled.div`
  min-width: fit-content;
  margin-bottom: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 743px) {
    margin-bottom: 4.8rem;
  }
`;

const BannerTitle = styled.h1`
  max-width: 35rem;
  word-break: keep-all;
  white-space: normal;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5.6rem;
  margin-bottom: 4rem;

  @media (min-width: 744px) and (max-width: 1199px) {
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: 743px) {
    max-width: 24rem;
    line-height: 4rem;
    font-size: 3.2rem;
    text-align: center;
  }
`;

const BannerButton = styled.button`
  width: 100%;
  max-width: 36rem;
  height: 5.6rem;
  border: none;
  border-radius: 4rem;
  padding: 1.6rem 11rem;
  background-color: var(--primary-blue-color);
  color: white;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 743px) {
    padding: 1rem 7rem;
    font-size: 1.8rem;
  }
`;

const BannerImage = styled.div`
  img {
    vertical-align: top;
    max-width: 74.6rem;
    width: 100%;
    height: auto;

    @media (max-width: 743px) {
      max-width: 100%;
    }
  }
`;
