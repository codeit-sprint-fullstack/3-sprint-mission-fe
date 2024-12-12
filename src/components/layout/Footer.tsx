import Image from 'next/image';
import Link from 'next/link';
import facebookIcon from '@/public/images/home/ic_facebook.png';
import instagramIcon from '@/public/images/home/ic_instagram.png';
import twitterIcon from '@/public/images/home/ic_twitter.png';
import youtubeIcon from '@/public/images/home/ic_youtube.png';

export default function Footer() {
  return (
    <footer className='bg-bg-footer w-full h-[160px] flex justify-center items-start'>
      <div className='w-full xl:max-w-[1120px] mx-4 md:mx-6 xl:mx-5 mt-8 mb-0 font-normal flex justify-between items-center flex-wrap'>
        <div className='text-text-gray-primary'>@codeit-2024</div>
        <div className='gap-[30px] flex text-text-gray-secondary'>
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </div>
        <div className='flex gap-[13px]'>
          <Link href='https://www.facebook.com'>
            <Image
              src={facebookIcon}
              alt='facebook 로고'
              width={18}
              height={18}
            />
          </Link>
          <Link href='https://www.x.com'>
            <Image
              src={twitterIcon}
              alt='X(구 트위터) 로고'
              width={18}
              height={18}
            />
          </Link>
          <Link href='https://www.youtube.com'>
            <Image
              src={youtubeIcon}
              alt='youtube 로고'
              width={18}
              height={18}
            />
          </Link>
          <Link href='https://www.instagram.com'>
            <Image
              src={instagramIcon}
              alt='instagram 로고'
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
