import { createContext, useContext, useState, ReactNode } from "react";

// Context 타입 정의
type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
};

// 기본값을 제공하여 undefined 오류 방지
export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  setAccessToken: () => {},
});

// Context Provider Props 타입 정의
type AuthProviderProps = {
  children: ReactNode;
};

// Context Provider
export function AuthProvider({ children }: AuthProviderProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}

// Context Hook
export function useAuth() {
  return useContext(AuthContext);
}
