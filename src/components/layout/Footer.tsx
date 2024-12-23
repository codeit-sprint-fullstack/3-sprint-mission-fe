export default function Footer() {
  return (
    <footer className="px-4 pt-8 pb-16 footer bg-secondary-900">
      <nav className="grid-cols-3 justify-items-stretch text-secondary-200">
        <a className="link link-hover">Privacy Policy</a>
        <a className="text-center link link-hover">FAQ</a>
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
        <a className="link link-hover text-secondary-400">
          ©codeit - {new Date().getFullYear()}
        </a>
      </nav>
    </footer>
  );
}
