import Image from "next/image";

export default function Main2() {
  return (
    <div className="flex justify-center items-center h-[720px]">
      <Image
        src="/main2.png"
        alt="main2"
        className="cursor-pointer"
        width={588}
        height={444}
      />
      <div className="flex flex-col ml-[64px] gap-[12px] w-[274px] h-[238px]">
        <div className="text-[18px] font-bold leading-[26px] text-left text-[#3692FF]">
          Hot item
        </div>
        <div className="text-[40px] font-bold leading-[56px] tracking-[0.02em] text-left text-[#374151]">
          인기 상품을 확인해 보세요
        </div>
        <div className="text-[21px] font-medium leading-[32px] text-left text-[#374151]">
          가장 HOT한 중고거래 물품을 판다 마켓에서 확인해 보세요
        </div>
      </div>
    </div>
  );
}
