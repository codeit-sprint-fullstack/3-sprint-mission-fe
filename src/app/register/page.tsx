"use client";

import Image from "next/image";
import Link from "next/link";
import { useRegisterForm } from "../../hook/useRegisterForm";

export default function Register() {
  const { register, handleSubmit, onSubmit } = useRegisterForm();

  return (
    <div className="flex flex-col justify-center w-[640px] mx-auto my-[231px]">
      <Link href="/">
        <Image
          src="/loginpage-logo.png"
          alt="loginpage-logo"
          className="cursor-pointer mx-auto"
          width={396}
          height={132}
        />
      </Link>
      <div>
        <div className="text-[18px] font-bold leading-[26px] text-left">
          이메일
        </div>
        <input
          {...register("email")}
          className="w-[640px] h-[56px] px-[24px] py-[16px] rounded-[12px] bg-[#F3F4F6] text-[16px] font-normal leading-[26px] text-left text-[#9CA3AF] outline-none mt-[16px]"
          placeholder="이메일을 입력해주세요"
        />
        <div className="text-[18px] font-bold leading-[26px] text-left mt-[12px]">
          닉네임
        </div>
        <input
          {...register("nickname")}
          className="w-[640px] h-[56px] px-[24px] py-[16px] rounded-[12px] bg-[#F3F4F6] text-[16px] font-normal leading-[26px] text-left text-[#9CA3AF] outline-none mt-[16px]"
          placeholder="닉네임을 입력해주세요"
        />
        <div className="text-[18px] font-bold leading-[26px] text-left mt-[24px]">
          비밀번호
        </div>
        <input
          {...register("password")}
          className="w-[640px] h-[56px] px-[24px] py-[16px] rounded-[12px] bg-[#F3F4F6] text-[16px] font-normal leading-[26px] text-left text-[#9CA3AF] outline-none mt-[16px]"
          placeholder="비밀번호를 입력해주세요"
        />
        <div className="text-[18px] font-bold leading-[26px] text-left mt-[24px]">
          비밀번호 확인
        </div>
        <input
          {...register("confirmPassword")}
          className="w-[640px] h-[56px] px-[24px] py-[16px] rounded-[12px] bg-[#F3F4F6] text-[16px] font-normal leading-[26px] text-left text-[#9CA3AF] outline-none mt-[16px]"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        />
        <div
          onClick={handleSubmit(onSubmit)}
          className="w-[640px] h-[56px] px-[124px] py-[16px] rounded-[40px] bg-[#9CA3AF] text-[20px] font-semibold leading-[32px] text-center text-[#F3F4F6] mt-[24px] cursor-pointer"
        >
          회원가입
        </div>
        <div className="flex justify-between items-center w-[640px] h-[74px] px-[23px] py-[16px] rounded-[8px] bg-[#E6F2FF] mt-[24px]">
          <div className="text-[16px] font-medium leading-[26px] text-left text-[#1F2937]">
            간편 로그인하기
          </div>
          <div className="flex w-[100px] h-[42px] gap-[16px]">
            <Image
              src="/login-google.png"
              alt="login-google"
              className="cursor-pointer"
              width={42}
              height={42}
            />
            <Image
              src="/login-kakao.png"
              alt="login-kakao"
              className="cursor-pointer"
              width={42}
              height={42}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center mt-[16px]">
          <div className="text-[14px] font-medium leading-[24px] text-left text-[#1F2937]">
            이미 회원이신가요?
          </div>
          <Link href="/login">
            <div className="text-[14px] font-medium leading-[16.71px] text-left text-[#3692FF] underline decoration-solid cursor-pointer">
              로그인
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
