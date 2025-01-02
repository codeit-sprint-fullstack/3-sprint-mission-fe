import { postRefreshToken } from "@/services/authApi";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

// 환경 변수 설정
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 에러 타입 정의
export interface ApiError {
  status: number;
  message: string;
  code?: string;
}

// axios 인스턴스 생성
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // 5초 제한
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(
      `[Request] ${config.method?.toUpperCase()} ${config.url}`,
      config,
    );
    return config;
  },
  (error: AxiosError) => {
    console.error("[Request Error]", error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    console.log(
      `[Response] ${response.status} ${response.config.url}`,
      response,
    );
    return response; // 응답 데이터만 반환
  },
  async (error: AxiosError<ApiError>) => {
    const originalRequest = error.config;

    // 401 Unauthorized 처리
    if (error.response?.status === 401) {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        // 새 액세스 토큰 요청
        const newAccessToken = await postRefreshToken(refreshToken);
        console.log("[Token Refreshed]", newAccessToken);

        // 새 토큰 저장
        localStorage.setItem("accessToken", newAccessToken);

        // 실패했던 요청에 새 토큰 추가 후 재시도
        if (originalRequest?.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error("[Token Refresh Failed]", refreshError);

        // 토큰 갱신 실패 시 로그아웃 처리
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    // 기타 에러 처리
    const errorResponse: ApiError = {
      status: error.response?.status || 500,
      message: error.response?.data?.message || "Unknown error occurred.",
      code: error.response?.data?.code,
    };

    console.error(`[Error ${errorResponse.status}]`, errorResponse);
    return Promise.reject(errorResponse);
  },
);

export default api;
