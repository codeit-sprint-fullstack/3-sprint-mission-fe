import React from 'react';
import Navbar from '../layouts/navbar/Navbar';
import Banner from '../layouts/banner/Banner';
import IntroSection from '../layouts/main/IntroSection';
import FooterBanner from '../layouts/banner/FooterBanner';
import topBannerImage from '../assets/images/home/hero-image.png';
import bottomBannerImage from '../assets/images/home/bottom-banner-image.png';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="일상의 모든 물건을 거래해 보세요"
        buttonText="구경하러 가기"
        buttonLink="/items"
        imageSrc={topBannerImage}
      />
      <IntroSection />
      <Banner
        title="믿을 수 있는 <br /> 판다마켓 중고 거래"
        imageSrc={bottomBannerImage}
        isFooter
      />
    </>
  );
};

export default HomePage;
