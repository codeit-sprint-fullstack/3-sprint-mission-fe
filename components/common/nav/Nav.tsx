"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/images/logo/logo.svg";
import MobileLogo from "@/public/images/logo/logo_mobile.png";
import ic_profile from "@/public/icons/ic_profile.png";

import CommonBtn from "@/components/common/button/CommonBtn";
import { useAuthStore } from "@/store/useAuthStore";

const menuList = [
  { id: 1, name: "자유게시판", url: "/post" },
  { id: 2, name: "중고마켓", url: "/market" },
];

const Nav = () => {
  const pathname = usePathname();
  const urlPath = "/" + pathname.split("/")[1];

  const { isLogin, userInfo, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  const isLoggedInAndHasInfo = isLogin && userInfo;

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

        {isLoggedInAndHasInfo ? (
          <div className="flex items-center gap-3">
            <Image
              src={userInfo.image || ic_profile}
              alt="프로필 이미지"
              width={32}
              height={32}
            />
            <span className="text-sm md:text-base">{userInfo.nickname}님</span>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <Link href="/login">
            {/* 단순히 페이지 이동만 하니 Link 를 사용함, button의 onClick속성도 있지만 단순 이동하는 것에 굳이 넣을 필요성 및 효율성 측면에서 안좋다고 생각함 */}
            <CommonBtn>로그인</CommonBtn>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
