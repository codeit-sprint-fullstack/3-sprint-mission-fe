import { createContext, useContext, useState } from "react";

// Context 생성
const AuthContext = createContext();

// Context Provider
export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

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
