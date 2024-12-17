'use client';
import { LayoutInput } from '@/app/shared/components/layout';
import UserFoot from '@/app/shared/components/userFoot';
import { useState } from 'react';
type Form = {
  email: string;
  passowrd: string;
};
export default function Login() {
  const [form, setForm] = useState<Form>({
    email: '',
    passowrd: '',
  });
  function submitHandle(e: React.FormEvent<HTMLAnchorElement>) {
    e.preventDefault();
  }

  function changeHandle(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <LayoutInput
        name="email"
        title="이메일"
        type="email"
        placeholder="이메일을 입력해주세요"
        value={form.email}
        condition={form.email.length < 8}
        errMsg="잘못된 이메일입니다."
        maxLength={20}
        onchange={changeHandle}
      ></LayoutInput>
      <LayoutInput
        name="password"
        title="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        condition={form.passowrd.length < 8}
        errMsg="비밀번호를 8자 이상 입력해주세요"
        value={form.passowrd}
        onchange={changeHandle}
      ></LayoutInput>
      <UserFoot
        onSubmit={submitHandle}
        submitText="로그인"
        footerText="판다마켓이 처음이신가요?"
        footerLink={{
          text: '회원가입',
          href: '/user/register',
        }}
      />
    </>
  );
}
