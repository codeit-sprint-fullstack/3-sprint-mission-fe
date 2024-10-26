import Image from 'next/image';
import Link from 'next/link';
import { LogoSvg } from '@/shared/assets/icons';

const Header = () => {
  return (
    <header className='z-1 sticky top-0 mx-auto flex h-[4.375rem] w-screen justify-center bg-white/80 shadow-[0_0_#0000,_0_0_#0000,_0_0.0625rem_0.1875rem_0_rgb(0_0_0_/_10%),_0_0.0625rem_0.125rem_-0.0625rem_rgb(0_0_0_/_10%)] backdrop-blur'>
      <nav
        id='gnb'
        className='flex w-max max-w-[95rem] items-center justify-between px-4'
      >
        <h1 id='logo'>
          <Link
            href='/'
            role='button'
          >
            <span className='sr-only'>판다마켓 홈페이지</span>
            <Image
              src={LogoSvg}
              className='h-[3.1875rem] w-auto'
              alt='판다마켓 로고'
            />
            {/* <Logo /> */}
          </Link>
        </h1>
        <ul>
          <li className='signin'>
            <a
              href='/login'
              role='button'
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
