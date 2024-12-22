'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthRedirect() {
  let accessToken = null;

  if (typeof window !== undefined)
    accessToken = localStorage.getItem('accessToken');
  const router = useRouter();

  useEffect(() => {
    if (accessToken) router.replace('/items');
  }, [accessToken, router]);

  return null;
}
