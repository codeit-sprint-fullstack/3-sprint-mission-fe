import Image from "next/image";
import Link from "next/link";

import auth_logo from "@/public/images/logo/auth-logo.png";

const AuthLogo = () => {
  return (
    <Link href="/">
      <div className="relative h-[66px] w-[200px] md:h-[132px] md:w-[396px]">
        <Image src={auth_logo} fill alt="logo" />
      </div>
    </Link>
  );
};

export default AuthLogo;
