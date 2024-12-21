'use client';

import { useForm } from 'react-hook-form';
import { SignInFormData } from './types';
import Image from 'next/image';
import logo from '@/public/images/common/logo.png';
import CommonInputSection from '../common/commonInputSection/commonInputSection';
import CommonBtn from '../common/commonBtn/commonBtn';
import SocialLogin from './socialLogin';
import LoginLink from './loginLink';
import { signIn } from '@/services/api/auth';
import { useAuthMutation } from '@/hooks/useAuthMutation';

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<SignInFormData>({
    mode: 'onChange',
  });

  const email = watch('email');
  const password = watch('password');
  const buttonActive = email && password && isValid;

  const { mutate } = useAuthMutation<SignInFormData>(signIn);

  return (
    <>
      <form
        className='w-full flex flex-col items-center mt-[56px] md:mt-[158px] xl:mt-[170px]'
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        <Image
          src={logo}
          alt='로고 이미지'
          className='w-[198px] md:w-[396px] xl:w-[396px] mb-6 md:mb-10 xl:mb-10'
        />
        <CommonInputSection<SignInFormData>
          register={register}
          errors={errors}
          label='이메일'
          type='email'
          name='email'
          placeholder='이메일을 입력해주세요'
          validation={{
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^\S+@\S+$/i,
              message: '잘못된 이메일입니다',
            },
          }}
        />
        <CommonInputSection<SignInFormData>
          register={register}
          errors={errors}
          label='비밀번호'
          type='password'
          name='password'
          placeholder='비밀번호를 입력해주세요'
          validation={{
            required: '비밀번호를 입력해주세요',
            minLength: {
              value: 8,
              message: '비밀번호를 8자 이상 입력해주세요',
            },
          }}
        />
        <CommonBtn
          disabled={!buttonActive}
          className='w-full rounded-full mb-6 h-[56px]'
        >
          로그인
        </CommonBtn>
        <SocialLogin />
        <LoginLink variant='signIn' />
      </form>
    </>
  );
}
