import FeatureCard from "@/components/main/FeatureCard";
import HeroCard from "@/components/main/HeroCard";
import Link from "next/link";

function CTA() {
  return (
    <Link href="/" className="!text-lg rounded-full btn btn-primary btn-block">
      구경하러 가기
    </Link>
  );
}

const HERO_CARD = [
  {
    title: "일상의 모든 물건을 거래해 보세요",
    imgInfo: {
      src: "/images/img_home_top.svg",
      alt: "",
      width: 746,
      height: 340,
    },
    children: <CTA />,
    classNames: "pt-12 [&_img]:scale-[1.2]",
  },
  {
    title: "믿을 수 있는 판다마켓 중고 거래",
    imgInfo: {
      src: "/images/img_home_bottom.svg",
      alt: "",
      width: 746,
      height: 397,
    },
    classNames: "pt-[120px]",
  },
];

export default function Home() {
  return (
    <main>
      <section className="bg-primary-50">
        <HeroCard {...HERO_CARD[0]} />
      </section>
      <section>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </section>
      <section className="bg-primary-50">
        <HeroCard {...HERO_CARD[1]} />
      </section>
    </main>
  );
}
