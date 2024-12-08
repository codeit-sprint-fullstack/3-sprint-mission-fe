import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>판다마켓</h1>
        <nav>
          <Link href="/">홈</Link>
          <Link href="/board">자유게시판</Link>
          <Link href="/login">로그인</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
