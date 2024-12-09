import Image from 'next/image';
import Link from 'next/link';
import { LogoSvg } from '@assets/icons';

const Header = () => {
  return (
    <header className='z-1 sticky top-0 mx-auto flex h-[4.375rem] w-screen justify-center bg-white/80 shadow-[0_0_#0000,_0_0_#0000,_0_0.0625rem_0.1875rem_0_rgb(0_0_0_/_10%),_0_0.0625rem_0.125rem_-0.0625rem_rgb(0_0_0_/_10%)] backdrop-blur'>
      <nav
        id='gnb'
        className='flex w-full max-w-[95rem] items-center justify-between px-4 font-title'
      >
        <ul className='menus flex items-center justify-start gap-6'>
          <h1 id='logo'>
            <Link
              href='/'
              role='button'
              // className='hover:saturate-125 hover:brightness-110 transition-all duration-300 ease-in-out'
            >
              <span className='sr-only'>판다마켓 홈페이지</span>
              <Image
                src={LogoSvg}
                className='h-[3.1875rem] w-auto'
                alt='판다마켓 로고'
              />
            </Link>
          </h1>
          <li>자유게시판</li>
          <li>중고마켓</li>
        </ul>
        <ul className='flex items-center justify-between gap-6'>
          <li className='signin'>
            <a
              href='/login'
              role='button'
              className='block rounded-md border-[0.0625rem] border-solid border-transparent bg-[#3692ff] px-4 py-2 text-[#f3f4f6] hover:border-[#2f3ea9]'
            >
              로그인
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
