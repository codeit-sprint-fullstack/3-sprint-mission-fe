import HomeBanner from "@/components/home/HomeBanner";
import topBannerImage from "@/public/images/home/hero-image.png";
import bottomBannerImage from "@/public/images/home/bottom-banner-image.png";

export default function HomePage() {
  return (
    <>
      <HomeBanner
        title="일상의 모든 물건을 거래해 보세요"
        buttonText="구경하러 가기"
        buttonLink="/login"
        imageSrc={topBannerImage}
      />
      <HomeBanner
        title="믿을 수 있는 <br /> 판다마켓 중고 거래"
        imageSrc={bottomBannerImage}
        isFooter
      />
    </>
  );
}
