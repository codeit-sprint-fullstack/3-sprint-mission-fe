"use client";

import React from "react";
import AuthInput from "@/components/common/input/AuthInput";
import PillButton from "@/components/common/button/PillButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAuthStore } from "@/store/useAuthStore";
import { postSignin } from "@/services/authApi";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

const AuthLoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({});

  const { push } = useRouter();

  const { login, setError, toggleModal } = useAuthStore();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // authApi의 postSignin 함수 호출
      const { accessToken, refreshToken, user } = await postSignin({
        email: data.email,
        password: data.password,
      });

      // 토큰 로컬 스토리지에 저장
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // 로그인 상태 업데이트
      login({
        accessToken,
        refreshToken,
        user,
      });

      // window.location.href = "/items"; -> 이렇게 하면 서버 사이드 렌더링이 깨짐
      // 액세스 토큰이 있으면 중고 마켓 페이지로 이동
      if (localStorage.getItem("accessToken")) {
        push("/items");
      }
    } catch (error: any) {
      console.error("[Login Error]", error);
      const errorMessage =
        error.message || "로그인에 실패했습니다. 다시 시도해주세요.";
      setError(errorMessage); // 에러 메시지 설정
      toggleModal(true); // 모달 열기
    }
  };

  return (
    <form
      className="flex w-full flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* 이메일 입력 필드 */}
      <div className="flex flex-col">
        <AuthInput
          title="이메일"
          placeholder="이메일을 입력해주세요"
          type="normal"
          isError={!!errors.email}
          register={register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "유효한 이메일 주소를 입력해주세요.",
            },
          })}
          watch={watch("email")}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <p className="mt-1 text-sm text-red">{message}</p>
          )}
        />
      </div>

      {/* 비밀번호 입력 필드 */}
      <div className="flex flex-col">
        <AuthInput
          title="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          isError={!!errors.password}
          register={register("password", {
            validate: (value) => {
              if (!value) return "비밀번호를 입력해주세요.";
              if (value.length < 8)
                return "비밀번호는 최소 8자 이상이어야 합니다.";
              return true;
            },
          })}
          watch={watch("password")}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => (
            <p className="mt-1 text-sm text-red">{message}</p>
          )}
        />
      </div>

      {/* 로그인 버튼 */}
      <PillButton
        text="로그인"
        isDisabled={!(watch("email") && watch("password"))}
        type="submit"
      />
    </form>
  );
};

export default AuthLoginForm;
