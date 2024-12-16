'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthRedirect() {
  const accessToken = localStorage.getItem('accessToken');
  const router = useRouter();

  useEffect(() => {
    if (accessToken) router.replace('/items');
  }, [accessToken, router]);

  return null;
}
