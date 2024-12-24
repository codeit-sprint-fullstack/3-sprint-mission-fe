'use client';
import { LayoutInput } from '@/app/shared/components/layout';
import UserFoot from '@/app/shared/components/userFoot';
import { useAuth } from '@/app/shared/contexts/AuthContext';
import { isEmail } from '@/app/shared/hook/hook';
import { useState } from 'react';
export type LoginForm = {
  email: string;
  password: string;
};
export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const condition = [!isEmail(form.email), form.password.length < 8];

  async function submitHandle(e: React.FormEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const triger = condition
      .reduce((a: boolean[], c, i) => {
        a.push(condition[i] && c);
        return a;
      }, [])
      .some((x) => x);
    if (!triger) {
      await login(form);
    } else {
      alert('값을 제대로 입력해주세요');
      return;
    }
  }

  function changeHandle(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    e.preventDefault();
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
        condition={condition[0]}
        errMsg="잘못된 이메일입니다."
        maxLength={20}
        onchange={changeHandle}
      ></LayoutInput>
      <LayoutInput
        name="password"
        title="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        condition={condition[1]}
        errMsg="비밀번호를 8자 이상 입력해주세요"
        value={form.password}
        maxLength={50}
        onchange={changeHandle}
      ></LayoutInput>
      <UserFoot
        onSubmit={submitHandle}
        btnClassName={!condition[0] && !condition[1] ? 'bgPrimary100' : ''}
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
