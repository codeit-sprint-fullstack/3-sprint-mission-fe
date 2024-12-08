"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/images/logo/logo.svg";
import MobileLogo from "@/public/images/logo/logo_mobile.png";

import CommonBtn from "@/components/common/button/CommonBtn";

const menuList = [
  { id: 1, name: "자유게시판", url: "/post" },
  { id: 2, name: "중고마켓", url: "/market" },
];

const Nav = () => {
  const pathname = usePathname();
  const urlPath = "/" + pathname.split("/")[1];

  return (
    <nav className="min-w-[375px] border-b-[1px] border-gray-border px-4 py-2 md:px-6">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <div className="flex items-center gap-3 text-base font-bold md:gap-10 md:text-lg">
          <Link href="/">
            <Image
              src={Logo}
              alt="로고 이미지"
              width={153}
              height={51}
              className="hidden md:block"
            />
            <Image
              src={MobileLogo}
              alt="모바일 로고 이미지"
              width={81}
              height={40}
              className="block md:hidden"
            />
          </Link>
          {menuList.map((menu) => (
            <Link
              key={menu.id}
              href={menu.url}
              className={`${urlPath === menu.url && "text-blue"}`}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <CommonBtn>로그인</CommonBtn>
      </div>
    </nav>
  );
};

export default Nav;
