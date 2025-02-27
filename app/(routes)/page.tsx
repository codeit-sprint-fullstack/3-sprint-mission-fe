import HomeBanner from "@/components/home/HomeBanner";
import topBannerImage from "@/public/images/home/hero-image.png";
import bottomBannerImage from "@/public/images/home/bottom-banner-image.png";

// SSG 
export default function HomePage() {
  return (
    <main>
    <h1 className="sr-only">판다마켓 - 안전한 중고거래 플랫폼</h1>
    <section aria-label="메인 배너">
      <HomeBanner
        title="일상의 모든 물건을 거래해 보세요"
        buttonText="구경하러 가기"
        buttonLink="/login"
        imageSrc={topBannerImage}
      />
    </section>
    <article className="features">
      <h2 className="sr-only">판다마켓 주요 기능</h2>
      {/* 기능 소개 섹션들 */}
    </article>
    <section aria-label="신뢰성 배너">
      <HomeBanner
        title="믿을 수 있는 판다마켓 중고 거래"
        imageSrc={bottomBannerImage}
        isFooter
      />
    </section>
  </main>
  );
}
