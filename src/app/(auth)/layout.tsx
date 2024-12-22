'use client';

import dynamic from 'next/dynamic';
const AuthRedirect = dynamic(() => import('@/components/auth/authRedirect'), {
  ssr: false,
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthRedirect />
      <main className='flex-1 w-full flex flex-col items-center'>
        <div className='w-full md:w-[692px] xl:w-[692px] p-4 md:p-[52px] xl:p-[52px] xl:py-6 flex flex-col'>
          {children}
        </div>
      </main>
    </>
  );
}
