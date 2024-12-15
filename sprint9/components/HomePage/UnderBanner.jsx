import Image from "next/image";

const UnderBanner = () => {
  return (
    <div class="skyColorSection">
      <div class="skyColorContent">
        <div class="textBox5">
          <div class="text1">믿을 수 있는</div>
          <div class="text1">판다마켓 중고 거래</div>
        </div>
        <div
          class="imgBox"
          style={{
            position: "relative",
          }}
        >
          <Image
            src="/images/home/bottom-banner-image.png"
            alt="UnderBannerImg"
            width={746}
            height={397}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UnderBanner;
