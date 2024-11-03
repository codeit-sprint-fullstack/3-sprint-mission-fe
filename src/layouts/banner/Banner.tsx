import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/images/home/hero-image.png';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <StyledBanner>
      <BannerContainer>
        <BannerContent>
          <BannerTitle>일상의 모든 물건을 거래해 보세요</BannerTitle>
          <Link to={'/items'}>
            <BannerButton>구경하러 가기</BannerButton>
          </Link>
        </BannerContent>
        <BannerImage>
          <img
            src={heroImage || ''}
            alt="일상의 모든 물건을 거래해 보세요 배너 이미지"
          />
        </BannerImage>
      </BannerContainer>
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled.section`
  width: 100%;
  height: 54rem;
  background-color: var(--home-banner-bh-color);
  margin-top: 7rem;
`;

const BannerContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

const BannerContent = styled.div`
  min-width: fit-content;
  margin-bottom: 9rem;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerTitle = styled.h1`
  max-width: 35rem;
  text-wrap: wrap;
  word-break: keep-all;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5.6rem;
  margin-bottom: 4rem;
`;

const BannerButton = styled.button`
  width: 100%;
  max-width: 36rem;
  height: 5.6rem;
  border: none;
  border-radius: 4rem;
  padding: 1.6rem 12.4rem;
  background-color: var(--primary-blue-color);
  color: white;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const BannerImage = styled.div`
  img {
    vertical-align: top;
    max-width: 74.6rem;
    width: 100%;
    height: auto;
  }
`;
