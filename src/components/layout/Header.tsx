import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="px-4 py-2 navbar">
      <div className="flex-1">
        <div className="flex gap-2 py-2.5">
          <Image
            className="hidden tablet:block"
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
        <Link href="" className="px-10 py-2 leading-none btn btn-primary">
          로그인
        </Link>
      </div>
    </div>
  );
}