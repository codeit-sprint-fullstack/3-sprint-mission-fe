import Image from "next/image";

const Section1 = () => {
  return (
    <section class="whiteColorSection">
      <div class="content1">
        <div
          class="imgBox"
          style={{
            position: "relative",
          }}
        >
          <Image
            src="/images/home/feature1-image.png"
            alt="section1Img"
            width={588}
            height={444}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div class="textBox">
          <div class="hotItem">Hot item</div>
          <div class="text">
            <div class="bigtext">
              <div class="text1">인기 상품을</div>
              <div class="text1">확인해 보세요</div>
            </div>
          </div>
          <div class="smalltext">
            <div class="text1">가장 HOT한 중고거래 물품을</div>
            <div class="text1">판다 마켓에서 확인해 보세요</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
