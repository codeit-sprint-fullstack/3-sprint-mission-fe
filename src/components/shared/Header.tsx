import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center h-[70px] px-[200px]">
      <Link href="/">
        <Image
          src="/header-logo.png"
          alt="header-logo"
          className="cursor-pointer"
          width={153}
          height={51}
        />
      </Link>
      <Link href="/login">
        <div className="flex justify-center min-w-[128px] h-[48px] px-[23px] py-[12px] text-[16px] font-semibold leading-[26px] text-[white] rounded-[8px] bg-[#3692FF]">
          로그인
        </div>
      </Link>
    </div>
  );
}
