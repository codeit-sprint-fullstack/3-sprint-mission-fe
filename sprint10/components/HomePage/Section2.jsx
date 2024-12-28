import Image from "next/image";

const Section2 = () => {
  return (
    <section class="whiteColorSection">
    <div class="content2">
      <div class="textBox">
        <div class="search">
          Search
        </div>
        <div class="text">
          <div class="bigtext">
            <div class="text1">구매를 원하는</div>
            <div class="text1">상품을 검색하세요</div>
          </div>
        </div>
        <div class="smalltext">
          <div class="text1">구매하고 싶은 물품은 검색해서</div>
          <div class="text1">쉽게 찾아보세요</div>
        </div>
      </div>
        <div
          class="imgBox"
          style={{
            position: "relative",
          }}
        >
          <Image
            src="/images/home/feature2-image.png"
            alt="section2Img"
            width={588}
            height={444}
            style={{
              objectFit: "cover",
            }}
          />
      </div>
    </div>
  </section>
  );
};

export default Section2;
