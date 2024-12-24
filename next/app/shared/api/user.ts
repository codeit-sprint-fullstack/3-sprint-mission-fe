/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient } from '@tanstack/react-query';
import instance from './instance';
const queryClient = new QueryClient();
type Register = {
  email: string;
  name?: string;
  password: string;
} | null;
export async function RegisterApi(body: Register): Promise<any | null> {
  if (!body) return console.error('body 값이 없음');
  try {
    const response = await instance.post('/api/user/register', body);
    return await response.data;
  } catch (err: any) {
    if (err.response.status === 404) {
      return 'Email 중복';
    }
    console.error(err);
  }
}

type Login = {
  email: string;
  password: string;
};
export async function LoginApi(body: Login) {
  try {
    const response = await instance.post('/api/user/login', body);
    return await response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      return err;
    }
  }
}

export async function getUser() {
  try {
    const response = await instance.get('/api/user');
    return await response.data;
  } catch (err) {
    console.error(err);
  }
}
export async function Logout() {
  try {
    const response = await instance.get('/api/user/logout');
    return await response.data;
  } catch (err) {
    // console.error(err);
  }
}
