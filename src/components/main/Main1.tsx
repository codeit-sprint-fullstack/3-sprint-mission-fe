import Image from "next/image";
import Link from "next/link";

export default function Main1() {
  return (
    <div className="flex justify-center items-end bg-[#CFE5FF] h-[500px]">
      <div className="flex flex-col w-[357px] h-[260px] pb-[60px] gap-[30px] mr-[10px]">
        <div className="w-[295px] h-[112px] text-[32px] font-bold leading-[56px] text-left">
          일상의 모든 물건을 거래해 보세요
        </div>
        <Link href="/market">
          <div className="flex items-center justify-center w-[357px] h-[56px] px-[110px] py-[16px] rounded-[40px] text-[20px] font-semibold leading-[32px] text-[#F9FAFB] bg-[#3692FF] ">
            구경하러 가기
          </div>
        </Link>
      </div>
      <Image
        src="/main1.png"
        alt="main1"
        className="cursor-pointer"
        width={746}
        height={340}
      />
    </div>
  );
}
