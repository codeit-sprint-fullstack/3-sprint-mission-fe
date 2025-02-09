import Image from "next/image";

export default function Main5() {
  return (
    <div className="flex justify-center items-end bg-[#CFE5FF] h-[500px]">
      <div className="flex flex-col w-[357px] h-[260px] pb-[60px] gap-[30px] mr-[69px]">
        <div className="text-[36px] w-[320px] h-[172px] font-bold leading-[56px] text-left text-[#374151]">
          믿을 수 있는
          <br /> 판다마켓 중고 거래
        </div>
      </div>
      <Image
        src="/main5.png"
        alt="main5"
        className="cursor-pointer"
        width={746}
        height={397}
      />
    </div>
  );
}
