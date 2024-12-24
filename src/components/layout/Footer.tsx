const SOCIAL_LINKS = [
  {
    src: "/icon/ic_facebook.svg",
    alt: "facebook",
    href: "https://www.facebook.com/codeit.kr",
  },
  {
    src: "/icon/ic_twitter.svg",
    alt: "twitter",
    href: "https://blog.codeit.kr/",
  },
  {
    src: "/icon/ic_youtube.svg",
    alt: "youtube",
    href: "https://www.youtube.com/channel/UCCM79CPm2WbBYTRaiNEExbg",
  },
  {
    src: "/icon/ic_instagram.svg",
    alt: "instagram",
    href: "https://www.instagram.com/codeit_kr/",
  },
];

export default function Footer() {
  return (
    <footer className="footer bg-secondary-900 tablet:pb-27 tablet:px-6 laptop:px-50 px-4 pt-8 pb-16">
      <nav className="justify-items-stretch text-secondary-200 tablet:grid-cols-4 w-full grid-cols-3 gap-y-6 tablet:gap-[30px]">
        <a className="link link-hover tablet:text-right">Privacy Policy</a>
        <a className="link link-hover tablet:text-left text-center">FAQ</a>
        <ul className="flex justify-end gap-3">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.alt} className="avatar">
              <a href={link.href} className="inline-block w-5" target="_blank">
                <img src={link.src} alt={link.alt} />
              </a>
            </li>
          ))}
        </ul>
        <div className="text-secondary-400 tablet:-order-1 tabular-nums">
          ©codeit - {new Date().getFullYear()}
        </div>
      </nav>
    </footer>
  );
}
