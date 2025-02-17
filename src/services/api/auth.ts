import axiosInstance from '@/lib/axios/axiosInstance';
import { SignInFormData, SignUpFormData } from '@/components/sign/types';
import { SignInResponse } from './types/auth.types';

export const signIn = async (signInData: SignInFormData) => {
  try {
    const { data } = await axiosInstance.post('/auth/sign-in', signInData);
    return data;
  } catch (e) {
    console.error('로그인에 실패했습니다.', e);
    throw e;
  }
};

export const signUp = async (signUpData: SignUpFormData) => {
  try {
    const { data } = await axiosInstance.post<SignInResponse>('/auth/sign-up', {
      email: signUpData.email,
      nickname: signUpData.nickname,
      password: signUpData.password,
      passwordConfirmation: signUpData.passwordConfirmation,
    });
    return data;
  } catch (e) {
    console.error('회원가입에 실패했습니다.', e);
    throw e;
  }
};

export const getMe = async () => {
  try {
    const { data } = await axiosInstance.get('/users/me');
    return data;
  } catch (e) {
    console.error('인증 실패', e);
    throw e;
  }
};

export const refreshToken = async () => {
  try {
    await axiosInstance.post('/auth/refresh-token');
  } catch (e) {
    console.error('토큰 갱신에 실패했습니다.', e);
    throw e;
  }
};
