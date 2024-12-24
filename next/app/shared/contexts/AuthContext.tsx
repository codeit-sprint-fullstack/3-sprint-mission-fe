'use client';
import { useQuery } from '@tanstack/react-query';
import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useEffect,
} from 'react';
import { getUser, LoginApi, Logout } from '../api/user';
import { LoginForm } from '@/app/user/login/page';
import { useRouter } from 'next/navigation';

type Auth = PropsWithChildren<{
  user: any | null;
  login: (body: LoginForm) => Promise<void>;
  logout: React.MouseEventHandler<HTMLAnchorElement | any>;
}> | null;

const AuthContext = createContext<Auth>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const router = useRouter();

  const { data: user } = useQuery({
    queryKey: ['user', token],
    queryFn: getUser,
    staleTime: 60 * 60 * 1000,
    enabled: !!token,
    refetchOnMount: 'always',
  });
  useEffect(() => {
    if (!!!user) {
      localStorage.removeItem('token');
    }
  }, [user]);
  async function login({ email, password }: LoginForm) {
    console.log('login');
    try {
      const res = await LoginApi({ email, password });
      if (!!res.accessToken) {
        localStorage.setItem('token', res.accessToken);
        setToken(localStorage.getItem('token'));
        router.push('/');
      } else alert('id or password를 확인해주세요');
    } catch (err) {
      console.error('AuthLogin Error', err);
    }
  }

  async function logout(e: React.MouseEvent) {
    e.preventDefault();
    await Logout();
    localStorage.removeItem('token');
    router.push('/user/login');
  }

  return (
    <AuthContext.Provider value={{ user: user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('GlobalProvider 안에서 사용해야함');
  return context;
}
