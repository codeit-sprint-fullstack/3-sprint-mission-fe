"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/src/store/auth";
import { useQuery } from "@tanstack/react-query";
import { getUserNickname } from "@/src/utils/axios";

export default function HeaderLogin() {
  const { userId, logout } = useAuthStore();

  const { data: nickname, isLoading } = useQuery({
    queryKey: ["userNickname", userId],
    queryFn: () => (userId ? getUserNickname(userId) : Promise.resolve("")),
    enabled: !!userId,
  });
  return (
    <div className="flex flex-row justify-between items-center h-[70px] px-[200px]">
      <div className="flex flex-row items-center justify-center gap-6">
        <Link href="/">
          <Image
            src="/header-logo.png"
            alt="header-logo"
            className="cursor-pointer"
            width={153}
            height={51}
          />
        </Link>
        <div className=" flex flex-row items-center gap-3 w-[201px] h-[68px]">
          <Link href="/border">
            <div className="text-[18px] font-bold leading-[26px] text-center text-[#4B5563] cursor-pointer">
              자유게시판
            </div>
          </Link>
          <Link href="/market">
            <div className="text-[18px] font-bold leading-[26px] text-center text-[#4B5563] cursor-pointer">
              중고마켓
            </div>
          </Link>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-3">
          <Image
            src="/userImage.png"
            alt="userImage"
            className="cursor-pointer"
            width={40}
            height={40}
          />
          <div className="font-[600] text-[18px] leading-[21.78px] text-[#4B5563]">
            {nickname}
          </div>
        </div>
        <Link href="/">
          <div
            onClick={logout}
            className="flex justify-center min-w-[128px] h-[48px] px-[23px] py-[12px] text-[16px] font-semibold leading-[26px] text-[white] rounded-[8px] bg-[#3692FF]"
          >
            로그아웃
          </div>
        </Link>
      </div>
    </div>
  );
}
