"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

/* 아이콘 */
import btn_visibility_on from "@/public/icons/btn_visibility_on.svg";
import btn_visibility_off from "@/public/icons/btn_visibility_off.svg";

type AuthInputProps = {
  title: string;
  placeholder: string;
  type: "text" | "password" | "number";
  isError?: boolean;
  register?: ReturnType<ReturnType<typeof useForm>["register"]>;
  watch?: string | undefined;
};

const inputContainerBase =
  "mt-2 flex h-14 w-full items-center justify-between rounded-xl border px-4 bg-gray-light";
const inputContainerError = "border-red-500";
const inputContainerFocus = "border-blue-500 ";
const inputContainerDefault = "border-gray-light";

const AuthInput = ({
  title,
  placeholder,
  type,
  isError,
  register,
  watch, // 현재 입력된 비밀번호 길이를 확인하기 위해 사용
}: AuthInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const inputType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type;

  /* focus할때 input의 부모인 div에게 border 색상을 변경하는 것을 css 만으로는 못할까?  */
  return (
    <label className="relative">
      <h2 className="text-lg font-bold">{title}</h2>
      <div
        className={`${inputContainerBase} ${
          isError
            ? inputContainerError
            : isFocus
              ? inputContainerFocus
              : inputContainerDefault
        }`}
      >
        <input
          className="flex-1 bg-[#F3F4F6] text-base placeholder:text-[#9CA3AF] focus:outline-none"
          type={inputType}
          placeholder={placeholder}
          {...register}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />

        {type === "password" && (watch?.length ?? 0) > 0 && (
          <button
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            type="button"
          >
            <Image
              src={isPasswordVisible ? btn_visibility_on : btn_visibility_off}
              width={24}
              height={24}
              alt="비밀번호 보이기"
            />
          </button>
        )}
      </div>
    </label>
  );
};

export default AuthInput;
