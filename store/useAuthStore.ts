import { create } from "zustand";

type UserInfo = {
  id: number;
  email: string;
  image: string | null;
  nickname: string;
  updatedAt: string;
  createdAt: string;
};

type AuthStore = {
  isLogin: boolean; // 로그인 여부
  accessToken: string | null; // 엑세스 토큰
  refreshToken: string | null; // 리프레시 토큰
  userInfo: UserInfo | null; // 유저 정보
  errorMessage: string | null; // 에러 메시지
  isModalOpen: boolean; // 모달 상태
  login: (data: {
    accessToken: string;
    refreshToken: string;
    user: UserInfo;
  }) => void; // 로그인 액션
  logout: () => void; // 로그아웃 액션
  refreshAccessToken: (newAccessToken: string) => void; // 엑세스 토큰 갱신
  setError: (message: string | null) => void; // 에러 메시지 설정
  toggleModal: (isOpen: boolean) => void; // 모달 열기/닫기
};

export const useAuthStore = create<AuthStore>((set) => ({
  isLogin: false,
  accessToken: null,
  refreshToken: null,
  userInfo: null,
  errorMessage: null,
  isModalOpen: false,

  login: ({ accessToken, refreshToken, user }) =>
    set({
      isLogin: true,
      accessToken,
      refreshToken,
      userInfo: user,
    }),

  logout: () =>
    set({
      isLogin: false,
      accessToken: null,
      refreshToken: null,
      userInfo: null,
    }),

  refreshAccessToken: (newAccessToken) =>
    set((state) => ({
      ...state,
      accessToken: newAccessToken,
    })),

  setError: (message) => set({ errorMessage: message }),
  toggleModal: (isOpen) => set({ isModalOpen: isOpen }),
}));
