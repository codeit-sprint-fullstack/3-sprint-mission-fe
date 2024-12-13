import Image from 'next/image';
import Link from 'next/link';
import kakao from '@/public/images/sign/kakaotalk.png';
import google from '@/public/images/sign/google.png';

export default function SocialLogin() {
  return (
    <>
      <div className='flex justify-between w-full bg-bg-social-login items-center px-[23px] py-4 font-medium rounded-lg'>
        <span>간편 로그인하기</span>
        <div className='flex items-center gap-4'>
          <Image
            src={google}
            alt='구글아이디로 로그인'
            width={42}
            height={42}
            className='cursor-pointer'
          />
          <Image
            src={kakao}
            alt='카카오 계정으로 로그인'
            width={42}
            height={42}
            className='cursor-pointer'
          />
        </div>
      </div>
      <span>
        이미 회원이신가요?
        <Link
          href='/sign-in'
          className='underline text-text-blue font-medium'
        >
          로그인하기
        </Link>
      </span>
    </>
  );
}
