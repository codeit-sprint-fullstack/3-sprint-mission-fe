import Link from 'next/link';
import Image from 'next/image';
import styles from './userFoot.module.css';
export default function UserFoot({
  onSubmit,
  submitText,
  footerText,
  footerLink,
}: {
  onSubmit: React.FormEventHandler<HTMLAnchorElement>;
  submitText: string | '로그인';
  footerText: string;
  footerLink: {
    text: string;
    href: string;
  };
}) {
  return (
    <div className={styles.UserFoot}>
      <Link href="#" onSubmit={onSubmit}>
        {submitText}
      </Link>
      <div className={styles.SimpleLogin}>
        <p>간편 로그인하기</p>
        <div className={styles.Left} style={{ height: 42 }}>
          <ImgLink
            href="https://www.kakaocorp.com/page/service/service/KakaoTalk"
            src="/img/google.svg"
            alt="구글"
            width={42}
            height={42}
            className={styles.Img}
          />
          <ImgLink
            href="https://www.kakaocorp.com/page/service/service/KakaoTalk"
            src="/img/kakao.svg"
            alt="구글"
            width={42}
            height={42}
            className={styles.Img}
          />
        </div>
      </div>
      <p className={styles.Text}>
        {footerText}
        <Link href={footerLink.href}>{footerLink.text}</Link>
      </p>
    </div>
  );
}
interface ImgLinkT {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}
function ImgLink({ className, href, src, alt, width, height }: ImgLinkT) {
  return (
    <Link href={href} className={className}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
}
