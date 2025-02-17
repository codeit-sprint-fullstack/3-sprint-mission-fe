'use client';

import cn from '@/lib/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { path: 'community', text: '자유게시판' },
  { path: 'items', text: '중고마켓' },
];

const navLinkStyle =
  'text-lg leading-10 font-bold sm:text-base md:text-[18px] xl:text-[18px]';
const activeStyle = (active: boolean) => {
  return active ? 'text-text-blue' : 'text-text-black-secondary';
};

export default function LinkList() {
  const path = usePathname();
  const pathname = path.split('/')[1];
  const isNotHomePage = path !== '/';

  if (isNotHomePage)
    return LINKS.map(({ path, text }) => {
      return (
        <Link
          key={text}
          href={`/${path}`}
        >
          <span className={cn(navLinkStyle, activeStyle(pathname === path))}>
            {text}
          </span>
        </Link>
      );
    });

  return null;
}
