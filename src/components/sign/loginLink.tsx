import Link from 'next/link';

export default function LoginLink({
  variant,
}: {
  variant: 'signIn' | 'signUp';
}) {
  const isSignUp = variant === 'signUp';

  return (
    <span className='mt-6'>
      {isSignUp ? '이미 회원이신가요? ' : '판다마켓이 처음이신가요? '}
      <Link
        href={isSignUp ? '/sign-in' : '/sign-up'}
        className='underline text-text-blue font-medium'
      >
        {isSignUp ? '로그인' : '회원가입'}
      </Link>
    </span>
  );
}
