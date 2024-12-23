import Image from "next/image";

export default function Header() {
  return (
    <div className="navbar">
      <div className="flex-1">
        <div className="flex gap-2 py-2.5">
          <Image
            src="/logo/pandamarket_logo_icon.png"
            alt="판다마켓 아이콘"
            width={40}
            height={40}
          />
          <Image
            className="py-2"
            src="/logo/pandamarket_logo_text.png"
            alt="판다마켓"
            width={103}
            height={35}
          />
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary">로그인</button>
      </div>
    </div>
  );
}
