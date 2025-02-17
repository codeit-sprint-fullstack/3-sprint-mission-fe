import CommonBtn from '@/components/common/commonBtn/commonBtn';
import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link href='/sign-in'>
      <CommonBtn>로그인</CommonBtn>
    </Link>
  );
}
