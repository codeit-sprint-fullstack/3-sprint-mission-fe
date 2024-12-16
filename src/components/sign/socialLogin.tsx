import Image from 'next/image';
import kakao from '@/public/images/sign/kakaotalk.png';
import google from '@/public/images/sign/google.png';
import Link from 'next/link';

export default function SocialLogin() {
  return (
    <>
      <div className='flex justify-between w-full bg-bg-social-login items-center px-[23px] py-4 font-medium rounded-lg'>
        <span>간편 로그인하기</span>
        <div className='flex items-center gap-4'>
          <Link href='https://www.google.com'>
            <Image
              src={google}
              alt='구글아이디로 로그인'
              width={42}
              height={42}
              className='cursor-pointer'
            />
          </Link>
          <Link href='https://www.kakaocorp.com/page'>
            <Image
              src={kakao}
              alt='카카오 계정으로 로그인'
              width={42}
              height={42}
              className='cursor-pointer'
            />
          </Link>
        </div>
      </div>
    </>
  );
}
