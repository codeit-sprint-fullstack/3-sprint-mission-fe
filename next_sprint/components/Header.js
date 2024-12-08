import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/login');
  }

  return (
    <>
      <header className="flex fixed w-full flex-wrap items-center px-4 lg:px-[200px] sm:px-6 h-[70px] border-b-[1px] bg-white">
        <Link href="/" >
          <Image src="/img/panda_logo.png" alt="logo" width={153} height={51} />
        </Link>

        <div className="flex space-x-8 ml-[60px]" >
          <Link href="/community" className={`${router.pathname==='/community'?'text-custom_blue':'text-primary'} 
                font-bold text-lg`}>
            자유게시판
          </Link>
          <Link href="/market" className={`${router.pathname==='/market'?'text-custom_blue':'text-primary'}
                font-bold text-lg`}>
            중고마켓
          </Link>
        </div>

        <div className="ml-auto">
          <Button handleClick={handleClick}>로그인</Button>
        </div>
      </header>
    </>
  );
}
