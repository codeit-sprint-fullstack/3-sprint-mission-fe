import Image from 'next/image';
import Logo from '@/public/images/logo/logo.svg';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <div>
        <Image src={Logo} alt="로고 이미지" width={153} height={51} />
        <Link href={'/board'}>자유 게시판</Link>
        <Link href={'/market'}>중고마켓</Link>
      </div>
      <button></button>
    </nav>
  );
};

export default Nav;
