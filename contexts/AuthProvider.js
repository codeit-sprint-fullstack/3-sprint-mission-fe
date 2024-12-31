import { createContext, useContext, useState } from "react";
import codeitAxios from "@/lib/codeitAxios";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  updateMe: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function getMe() {
    const res = await codeitAxios.get("/users/me");
    const nextUser = res.data;
    setUser(nextUser);
  }

  async function login(email, password) {
    const res = await codeitAxios.post("/auth/signIn", {
      email,
      password,
    });
    // await getMe();
    const user = res.data?.user;
    setUser(user);
    return res;
  }

  async function logout() {
    //로그아웃 구현하기

    localStorage.removeItem("accessToken");
    setUser(null);
  }

  async function updateMe(formData) {
    const res = await codeitAxios.patch("/users/me", formData);
    const nextUser = res.data;
    setUser(nextUser);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, updateMe }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("반드시 AuthProvider 안에서 사용");
  }
  return context;
}
