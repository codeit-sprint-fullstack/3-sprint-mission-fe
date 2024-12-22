'use client';
import { RegisterApi } from '@/app/shared/api/user';
import { LayoutInput } from '@/app/shared/components/layout';
import UserFoot from '@/app/shared/components/userFoot';
import { useChange, isEmail } from '@/app/shared/hook/hook';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
type Form = {
  email: string;
  name: string;
  password: string;
};
export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState<Form>({
    email: '',
    name: '',
    password: '',
  });
  const password2 = useChange();
  const condition = [
    !isEmail(form.email),
    !form.name,
    form.password.length < 8,
    password2.value !== form.password,
  ];

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
  async function submitHandle(e: React.FormEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const triger = condition
      .reduce((a: boolean[], c, i) => {
        a.push(condition[i] && c);
        return a;
      }, [])
      .some((x) => x);
    if (!triger) {
      const res = await RegisterApi(form);
      if (res === 'Email 중복') {
        return alert('Email 중복');
      }
      alert('회원가입을 축하드립니다.');
      router.push('/user/login');
    } else {
      alert('값을 정확히 입력하세요');
      return;
    }
  }
  return (
    <>
      <LayoutInput
        name="email"
        title="이메일"
        type="email"
        placeholder="이메일을 입력해주세요"
        condition={condition[0]}
        value={form.email}
        onchange={changeHandle}
        errMsg="잘못된 이메일입니다."
        maxLength={20}
      ></LayoutInput>
      <LayoutInput
        name="name"
        title="닉네임"
        placeholder="닉네임을 입력해주세요"
        value={form.name}
        onchange={changeHandle}
        condition={condition[1]}
        errMsg="이름을 입력해주세요"
      ></LayoutInput>
      <LayoutInput
        name="password"
        title="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={form.password}
        onchange={changeHandle}
        condition={condition[2]}
        errMsg="비밀번호를 8자 이상 입력해주세요"
        maxLength={50}
      ></LayoutInput>
      <LayoutInput
        name="password2"
        title="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 다시 한 번 입력해주세요"
        value={password2.value}
        onchange={password2.onChange}
        condition={condition[3]}
        errMsg="비밀번호를 확인해주세요"
        maxLength={50}
      ></LayoutInput>
      <UserFoot
        onSubmit={submitHandle}
        btnClassName={
          !condition[0] && !condition[1] && !condition[2] && !condition[3]
            ? 'bgPrimary100'
            : ''
        }
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
