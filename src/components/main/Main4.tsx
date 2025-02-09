import Image from "next/image";

export default function Main4() {
  return (
    <div className="flex justify-center items-center h-[720px]">
      <Image
        src="/main4.png"
        alt="main4"
        className="cursor-pointer"
        width={588}
        height={444}
      />
      <div className="flex flex-col ml-[64px] gap-[12px] w-[335px] h-[238px]">
        <div className="text-[18px] font-bold leading-[26px] text-left text-[#3692FF]">
          Register
        </div>
        <div className="text-[38px] font-bold leading-[56px] tracking-[0.02em] text-left text-[#374151]">
          판매를 원하는
          <br /> 상품을 등록하세요
        </div>
        <div className="text-[21px] font-medium leading-[32px] text-left text-[#374151]">
          어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요
        </div>
      </div>
    </div>
  );
}
