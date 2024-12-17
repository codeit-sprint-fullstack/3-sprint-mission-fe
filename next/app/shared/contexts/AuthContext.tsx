'use client';
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
type Auth = {
  user: any | null;
} | null;
const AuthContext = createContext<Auth>(null);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      return '';
    },
    staleTime: 60 * 60 * 1000,
  });
  return (
    <AuthContext.Provider value={{ user: user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('GlobalProvider 안에서 사용해야함');
  return context;
}
