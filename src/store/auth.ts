import { create } from "zustand";
import { persist } from "zustand/middleware";
import axiosInstance from "@/src/lib/axios";

type AuthState = {
  userId: string | null;
  setUserId: (id: string | null) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      userId: null,
      setUserId: (id) => set({ userId: id }),
      logout: async () => {
        try {
          await axiosInstance.post("/auth/logout");
        } catch (error) {
          console.error("로그아웃 실패:", error);
        } finally {
          set({ userId: null });
          localStorage.removeItem("userId");
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
