import Image from 'next/image';
import { facebookLogo, instagramLogo, twitterLogo, youtubeLogo } from '@/shared/assets/icons';

const Footer = () => {
  return (
    <footer className='flex w-screen justify-center bg-[#111827] text-[#e5e7eb]'>
      <nav
        id='fnb'
        className='mb-[6.75rem] mt-8 flex w-full max-w-[95rem] items-center justify-between px-4'
      >
        <div>
          <span className='text-[#9ca3af]'>©codeit - 2024</span>
        </div>
        <div>
          <ul className='flex'>
            <li>
              <a href='/privacy'>Privacy Policy</a>
            </li>
            <li>
              <a href='/faq'>FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className='flex gap-x-3 gap-y-0'>
            <li>
              <a
                href='https://facebook.com/'
                target='_blank'
              >
                <Image
                  src={facebookLogo}
                  alt='페이스북'
                />
              </a>
            </li>
            <li>
              <a
                href='https://x.com/'
                target='_blank'
              >
                <Image
                  src={twitterLogo}
                  alt='X(구 트위터)'
                />
              </a>
            </li>
            <li>
              <a
                href='https://youtube.com/'
                target='_blank'
              >
                <Image
                  src={youtubeLogo}
                  alt='유튜브'
                />
              </a>
            </li>
            <li>
              <a
                href='https://instagram.com/'
                target='_blank'
              >
                <Image
                  src={instagramLogo}
                  alt='인스타그램'
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
