import FeatureCard from "@/components/main/FeatureCard";
import HeroCard from "@/components/main/HeroCard";
import Link from "next/link";

function CTA() {
  return (
    <Link
      href="/"
      className="!text-lg tablet:!text-xl rounded-full btn btn-primary btn-block max-w-[357px]"
    >
      구경하러 가기
    </Link>
  );
}

const HERO_CARD = [
  {
    title: "일상의 모든 물건을 거래해 보세요",
    imgInfo: {
      src: "/images/Img_home_top.svg",
      alt: "",
      width: 746,
      height: 340,
    },
    children: <CTA />,
    classNames: "pt-12 tablet:pt-[84px] max-tablet:[&_img]:scale-[1.2]",
  },
  {
    title: "믿을 수 있는 판다마켓 중고 거래",
    imgInfo: {
      src: "/images/Img_home_bottom.svg",
      alt: "",
      width: 746,
      height: 397,
    },
    classNames: "pt-[120px] tablet:pt-[201px]",
  },
];

const FEATURE_CARD = [
  {
    keyword: "Hot Items",
    title: "인기 상품을 확인해보세요",
    description: "가장 HOT한 중고거래 물품을 판다 마켓에서 확인해보세요",
    imgInfo: {
      src: "/images/Img_feature_01.png",
      alt: "",
      width: 588,
      height: 444,
    },
    classNames: "[&_.card-body]:pr-8",
  },
  {
    keyword: "Search",
    title: "구매를 원하는 상품을 검색하세요",
    description: "구매하고 싶은 물품은 검색해서 쉽게 찾아보세요",
    imgInfo: {
      src: "/images/img_feature_02.svg",
      alt: "",
      width: 588,
      height: 444,
    },
    classNames: "[&_.card-body]:text-right [&_.card-body]:pl-8",
  },
  {
    keyword: "Register",
    title: "판매를 원하는 상품을 등록하세요",
    description: "어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요",
    imgInfo: {
      src: "/images/img_feature_03.png",
      alt: "",
      width: 588,
      height: 444,
    },
    classNames: "[&_.card-body]:pr-8",
  },
];

export default function Home() {
  return (
    <main>
      <section className="bg-primary-50">
        <HeroCard {...HERO_CARD[0]} />
      </section>
      <section className="grid gap-10 px-4 pt-[52px] pb-[83px] tablet:p-6">
        {FEATURE_CARD.map((feature) => (
          <FeatureCard key={feature.keyword} {...feature} />
        ))}
      </section>
      <section className="bg-primary-50">
        <HeroCard {...HERO_CARD[1]} />
      </section>
    </main>
  );
}
