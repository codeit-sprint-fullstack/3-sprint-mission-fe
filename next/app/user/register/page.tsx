'use client';
import { LayoutInput } from '@/app/shared/components/layout';
import UserFoot from '@/app/shared/components/userFoot';
export default function Register() {
  return (
    <>
      <LayoutInput
        name="email"
        title="이메일"
        type="email"
        placeholder="이메일을 입력해주세요"
      ></LayoutInput>
      <LayoutInput
        name="name"
        title="닉네임"
        placeholder="닉네임을 입력해주세요"
      ></LayoutInput>
      <LayoutInput
        name="password"
        title="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      ></LayoutInput>
      <LayoutInput
        name="password2"
        title="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 다시 한 번 입력해주세요"
      ></LayoutInput>
      <UserFoot
        onSubmit={() => {}}
        footerText="이미 회원이신가요?"
        footerLink={{
          text: '로그인',
          href: '/user/login',
        }}
        submitText="회원가입"
      />
    </>
  );
}
