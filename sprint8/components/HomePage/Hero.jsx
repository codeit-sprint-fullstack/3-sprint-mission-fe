import Link from "next/link";
import Image from "next/image";


const Hero = () => {
  return (
    <section className="skyColorSection">
      <div className="skyColorContent">
        <div className="textBox">
          <div className="text">
            <span className="text1">일상의 모든 물건을</span>
            <span className="text1" id="textCenter">
              거래해 보세요
            </span>
          </div>
          <Link href="/CommunityFeed">
            <div className="button">
              구경하러 가기
            </div>
              {/* 일단 CommunityFeed 페이지로 이동*/}
          </Link>
        </div>
        <div
          className="imgBox"
          style={{
            position: "relative",
          }}
        >
          <Image
            src="/images/home/hero-image.png"
            alt="히어로 이미지"
            width={746}
            height={340}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
