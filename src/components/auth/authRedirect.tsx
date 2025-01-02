'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthRedirect({
  variant,
}: {
  variant: 'signedIn' | 'signedOut';
}) {
  let accessToken = null;

  if (typeof window !== undefined)
    accessToken = localStorage.getItem('accessToken');
  const router = useRouter();

  useEffect(() => {
    if (accessToken && variant === 'signedIn') router.replace('/items');
    if (!accessToken && variant === 'signedOut') router.replace('/sign-in');
  }, [accessToken, router, variant]);

  return null;
}
