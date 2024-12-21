'use client';

import { useForm } from 'react-hook-form';
import { SignUpFormData } from './types';
import CommonInputSection from '../common/commonInputSection/commonInputSection';
import Image from 'next/image';
import logo from '@/public/images/common/logo.png';
import SocialLogin from './socialLogin';
import LoginLink from './loginLink';
import CommonBtn from '../common/commonBtn/commonBtn';
import { signUp } from '@/services/api/auth';
import { useAuthMutation } from '@/hooks/useAuthMutation';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<SignUpFormData>({
    mode: 'onChange',
  });

  const email = watch('email');
  const nickname = watch('nickname');
  const password = watch('password');
  const passwordConfirmation = watch('passwordConfirmation');
  const buttonActive =
    email && nickname && password && passwordConfirmation && isValid;

  const { mutate } = useAuthMutation<SignUpFormData>(signUp);

  return (
    <form
      className='w-full flex flex-col items-center'
      onSubmit={handleSubmit((data) => mutate(data))}
    >
      <Image
        src={logo}
        alt='로고 이미지'
        className='w-[198px] md:w-[396px] xl:w-[396px] mb-6 md:mb-10 xl:mb-10'
      />
      <CommonInputSection<SignUpFormData>
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
      <CommonInputSection<SignUpFormData>
        register={register}
        errors={errors}
        label='닉네임'
        name='nickname'
        placeholder='닉네임을 입력해주세요'
        validation={{
          required: '닉네임을 입력해주세요',
        }}
      />
      <CommonInputSection<SignUpFormData>
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
      <CommonInputSection<SignUpFormData>
        register={register}
        errors={errors}
        label='비밀번호 확인'
        type='password'
        name='passwordConfirmation'
        placeholder='비밀번호를 다시 한 번 입력해주세요'
        validation={{
          required: '비밀번호를 다시 한 번 입력해주세요',
          minLength: {
            value: 8,
            message: '비밀번호를 8자 이상 입력해주세요',
          },
          validate: (value) =>
            value === password || '비밀번호가 일치하지 않습니다',
        }}
      />
      <CommonBtn
        type='submit'
        disabled={!buttonActive}
        className='w-full rounded-full mb-6 h-[56px]'
      >
        회원가입
      </CommonBtn>
      <SocialLogin />
      <LoginLink variant='signUp' />
    </form>
  );
}
