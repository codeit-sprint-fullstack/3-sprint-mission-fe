"use client";

import React from "react";
import AuthInput from "@/components/common/input/AuthInput";
import PillButton from "@/components/common/button/PillButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAuthStore } from "@/store/useAuthStore";
import { postSignup } from "@/services/authApi";
import { useRouter } from "next/navigation";
import type { AuthSignUpRequest } from "@/types/auth";

const AuthSignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthSignUpRequest>({});

  const { push } = useRouter();
  const { login, setError, toggleModal } = useAuthStore();
  const password = watch("password");

  const onSubmit: SubmitHandler<AuthSignUpRequest> = async (data) => {
    try {
      const response = await postSignup({
        email: data.email,
        nickname: data.nickname,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
      });

      const { accessToken, refreshToken, user } = response;

      console.log("[Signin Result]", accessToken, refreshToken, user);

      // 회원가입 성공 시 자동 로그인
      login({
        accessToken,
        refreshToken,
        user,
      });

      push("/login");
    } catch (error: any) {
      console.error("[Signup Error]", error);
      const errorMessage =
        error.message || "회원가입에 실패했습니다. 다시 시도해주세요.";
      setError(errorMessage);
      toggleModal(true);
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

      {/* 닉네임 입력 필드 */}
      <div className="flex flex-col">
        <AuthInput
          title="닉네임"
          placeholder="닉네임을 입력해주세요"
          type="normal"
          isError={!!errors.nickname}
          register={register("nickname", {
            required: "닉네임을 입력해주세요.",
            minLength: {
              value: 2,
              message: "닉네임은 최소 2자 이상이어야 합니다.",
            },
            maxLength: {
              value: 10,
              message: "닉네임은 최대 10자까지 가능합니다.",
            },
            pattern: {
              value: /^[가-힣a-zA-Z0-9]+$/,
              message: "한글, 영문, 숫자만 사용 가능합니다.",
            },
          })}
          watch={watch("nickname")}
        />
        <ErrorMessage
          errors={errors}
          name="nickname"
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
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자 이상이어야 합니다.",
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message: "영문, 숫자, 특수문자를 포함해야 합니다.",
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

      {/* 비밀번호 확인 입력 필드 */}
      <div className="flex flex-col">
        <AuthInput
          title="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          isError={!!errors.passwordConfirmation}
          register={register("passwordConfirmation", {
            required: "비밀번호 확인을 입력해주세요.",
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
          watch={watch("passwordConfirmation")}
        />
        <ErrorMessage
          errors={errors}
          name="passwordConfirmation"
          render={({ message }) => (
            <p className="mt-1 text-sm text-red">{message}</p>
          )}
        />
      </div>

      {/* 회원가입 버튼 */}
      <PillButton
        text="회원가입"
        isDisabled={
          !(
            watch("email") &&
            watch("nickname") &&
            watch("password") &&
            watch("passwordConfirmation")
          )
        }
        type="submit"
      />
    </form>
  );
};

export default AuthSignupForm;
