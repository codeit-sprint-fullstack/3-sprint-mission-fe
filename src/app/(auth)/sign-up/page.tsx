'use client';

import dynamic from 'next/dynamic';
const SignUpForm = dynamic(() => import('@/components/sign/signUpForm'), {
  ssr: false,
});

export default function Page() {
  return <SignUpForm />;
}
