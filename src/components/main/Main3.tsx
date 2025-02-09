import Image from "next/image";

export default function Main3() {
  return (
    <div className="flex justify-center items-center h-[720px] gap-[64px]">
      <div className="flex flex-col w-[317px] h-[238px]">
        <div className="text-[18px] font-bold leading-[26px] text-right text-[#3692FF]">
          Search
        </div>
        <div className="text-[35px] font-bold leading-[56px] tracking-[0.02em] text-right text-[#374151] mt-[12px]">
          구매를 원하는 <br />
          상품을 검색하세요
        </div>
        <div className="text-[22px] font-medium leading-[32px] text-right text-[#374151] mt-[24px]">
          구매하고 싶은 물품은 검색해서 쉽게 찾아보세요
        </div>
      </div>
      <Image
        src="/main3.png"
        alt="main3"
        className="cursor-pointer"
        width={588}
        height={444}
      />
    </div>
  );
}
