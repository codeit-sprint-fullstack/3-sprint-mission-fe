'use client';

import cn from '@/lib/cn';
import Image from 'next/image';
import logo from '@/public/images/common/logo.png';
import mobileLogo from '@/public/images/common/mobileLogo.png';
import { MEDIA_QUERY } from '@/constants/mediaQuery';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useScreenWidth from '@/hooks/useScreenWidth';

const imageWidth = {
  [MEDIA_QUERY.value.large]: 153,
  [MEDIA_QUERY.value.medium]: 153,
  [MEDIA_QUERY.value.small]: 81,
};

const LINKS = [
  { path: 'community', text: '자유게시판' },
  { path: 'market', text: '중고마켓' },
];
const navLinkStyle = 'text-2xl leading-10 font-bold sm:text-xl';
const activeStyle = (active: boolean) => {
  return active ? 'text-text-blue' : 'text-text-black-secondary';
};

export default function GNB() {
  const path = usePathname();
  const pathname = path.split('/')[1];
  const isNotHomePage = path !== '/';
  const screenWidth = useScreenWidth();

  const logoImage = {
    src: screenWidth === MEDIA_QUERY.value.small ? mobileLogo : logo,
    width: imageWidth[screenWidth],
  };

  return (
    <div className='w-full h-[70px] flex justify-center sticky border-b border-solid border-border-gnb border-[1px]'>
      <div className='w-full max-w-full md:max-w-full xl:max-w-[1520px] my-0 mx-4 md:mx-6 xl:mx-[200px] flex items-center justify-between'>
        <div className='h-full flex items-center gap-2 md:gap-[30px] xl:gap-[30px]'>
          <Link href='/'>
            <Image
              {...logoImage}
              alt='판다마켓 로고'
              height={0}
              className='h-auto'
            />
          </Link>
          {isNotHomePage &&
            LINKS.map(({ path, text }) => {
              return (
                <Link
                  key={text}
                  href={path}
                >
                  <span
                    className={cn(navLinkStyle, activeStyle(pathname === path))}
                  >
                    {text}
                  </span>
                </Link>
              );
            })}
        </div>
        <button className='w-[88px] h-[42px] bg-bg-button-active disabled:bg-bg-button-disabled text-white rounded-lg font-semibold'>
          로그인
        </button>
      </div>
    </div>
  );
}
