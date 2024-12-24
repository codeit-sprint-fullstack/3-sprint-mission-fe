import api from "@/lib/axios";
import {
  AuthRefreshTokenRequest,
  AuthRefreshTokenResponse,
  AuthSignInRequest,
  AuthSignInResponse,
  AuthSignUpRequest,
  AuthSignUpResponse,
} from "@/types/auth";

// 회원 가입 API 호출 함수
export const postSignup = async (
  data: AuthSignUpRequest,
): Promise<AuthSignUpResponse> => {
  const response = await api.post("/auth/signUp", data);
  return response.data;
};

// 로그인 API 호출 함수
export const postSignin = async (
  data: AuthSignInRequest,
): Promise<AuthSignInResponse> => {
  const response = await api.post("/auth/signIn", data);
  return response.data;
};

// 토큰 갱신 API 호출 함수
export const postRefreshToken = async (
  data: AuthRefreshTokenRequest,
): Promise<AuthRefreshTokenResponse> => {
  const response = await api.post("/auth/refresh-token", data);
  return response.data;
};
