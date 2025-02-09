"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "@/src/lib/axios";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/src/store/auth";

const loginSchema = z.object({
  email: z.string().email("올바른 이메일 형식을 입력해주세요."),
  password: z.string().min(6, "비밀번호는 최소 8자 이상이어야 합니다."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function useLoginForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    if (loading) return;
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axiosInstance.post("/auth/login", {
        email: data.email,
        password: data.password,
      });

      useAuthStore.getState().setUserId(response.data.userId);
      alert("로그인 성공!");
      router.push("/");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "로그인 실패");
    } finally {
      setLoading(false);
    }
  };

  return { register, handleSubmit, onSubmit, errors, loading, errorMessage };
}
