export default function Footer() {
  return (
    <footer className="footer bg-secondary-900 tablet:pb-27 tablet:px-6 px-4 pt-8 pb-16">
      <nav className="justify-items-stretch text-secondary-200 tablet:grid-cols-4 tablet:w-full grid-cols-3 tablet:gap-[30px]">
        <a className="link link-hover tablet:text-right">Privacy Policy</a>
        <a className="link link-hover tablet:text-left text-center">FAQ</a>
        <ul className="grid grid-flow-col gap-3">
          <li>
            <a className="link link-hover">1</a>
          </li>
          <li>
            <a className="link link-hover">2</a>
          </li>
          <li>
            <a className="link link-hover">3</a>
          </li>
          <li>
            <a className="link link-hover">4</a>
          </li>
        </ul>
        <a className="link link-hover text-secondary-400 tablet:-order-1">
          ©codeit - {new Date().getFullYear()}
        </a>
      </nav>
    </footer>
  );
}
