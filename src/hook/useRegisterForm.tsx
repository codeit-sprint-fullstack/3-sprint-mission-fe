"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "@/src/lib/axios";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    email: z.string().email("올바른 이메일 형식을 입력해주세요."),
    nickname: z.string().min(2, "닉네임은 최소 2자 이상이어야 합니다."),
    password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export function useRegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    if (loading) return;
    setLoading(true);
    setErrorMessage("");

    try {
      await axiosInstance.post(
        "/users/register",
        {
          email: data.email,
          nickname: data.nickname,
          password: data.password,
        },
        { withCredentials: true }
      );

      alert("회원가입이 완료되었습니다.");
      router.push("/");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "회원가입 실패");
    } finally {
      setLoading(false);
    }
  };

  return { register, handleSubmit, onSubmit, errors, loading, errorMessage };
}
