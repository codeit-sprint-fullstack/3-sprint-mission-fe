'use client';
import { usePathname } from 'next/navigation';
import noHeader from './noHader';
export default function Footer() {
  const pathname = usePathname();
  if (noHeader.some((x) => x === pathname))
    return (
      <footer>
        <div className="content">
          <p>@codeit - 2024</p>
          <div className="link">
            <a href="./privacy.html">Privacy Policy</a>
            <a href="./faq.html">FAQ</a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/" target="_blank">
              <img src="/img/ic_facebook.png" alt="페이스북" />
            </a>
            <a href="https://x.com" target="_blank">
              <img src="/img/ic_twitter.png" alt="트위터" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src="/img/ic_youtube.png" alt="유튜브" />
            </a>
            <a
              href="https://www.instagram.com/sem/campaign/emailsignup/"
              target="_blank"
            >
              <img src="/img/ic_instagram.png" alt="인스타그램" />
            </a>
          </div>
        </div>
      </footer>
    );
}
