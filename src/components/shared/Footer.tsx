import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between items-center bg-[#111827] w-[100%] h-[160px] px-[200px] mx-auto">
      <div className="text-[#9CA3AF] min-w-[125px] h-[19px] text-[16px] leading-[19.09px]">
        ©codeit - 2024
      </div>
      <div className="flex gap-[30px] min-w-[170px] h-[19px]">
        <div className="text-[white]">Privacy Policy</div>
        <div className="text-[white]">FAQ</div>
      </div>
      <div className="flex justify-between min-w-[116px] h-[20px]">
        <Image
          src="/facebook.png"
          alt="facebook"
          className="cursor-pointer"
          width={20}
          height={20}
        />
        <Image
          src="/twitter.png"
          alt="twitter"
          className="cursor-pointer"
          width={20}
          height={20}
        />
        <Image
          src="/youtube.png"
          alt="youtube"
          className="cursor-pointer"
          width={20}
          height={20}
        />
        <Image
          src="/instagram.png"
          alt="instagram"
          className="cursor-pointer"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
