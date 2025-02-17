'use client';

import Image from 'next/image';
import logo from '@/public/images/common/logo.png';
import mobileLogo from '@/public/images/common/mobileLogo.png';
import { MEDIA_QUERY } from '@/constants/mediaQuery';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { screenWidthAtom } from '@/lib/store/atoms';
import { ScreenWidth } from '@/lib/types/options.types';
import { useMe } from '@/hooks/useMe';
import Avatar from '../../common/avatar/avatar';
import LoginButton from './loginButton';
import LinkList from './linkList';

const imageWidth = {
  [MEDIA_QUERY.value.large]: 153,
  [MEDIA_QUERY.value.medium]: 153,
  [MEDIA_QUERY.value.small]: 81,
};

export default function GNB() {
  const [screenWidth] = useAtom<ScreenWidth>(screenWidthAtom);

  const logoImage = {
    src: screenWidth === MEDIA_QUERY.value.small ? mobileLogo : logo,
    width: imageWidth[screenWidth!],
  };

  const { data: me } = useMe();

  return (
    <div className='w-full h-[70px] flex justify-center sticky border-b-solid border-b-border-gnb border-b-[1px]'>
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
          <LinkList />
        </div>
        {me ? (
          <Avatar
            nickname={me.nickname}
            image={me.image}
          />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}
