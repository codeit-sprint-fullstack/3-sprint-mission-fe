import Image from "next/image";
import ic_OauthGoogle from "@/public/icons/sns/ic_OauthGoogle.png";
import ic_OauthKakao from "@/public/icons/sns/ic_OauthKakao.png";

const SnsLogin = () => {
  return (
    <div className="h-20 w-full rounded-lg bg-[#E6F2FF]">
      <div className="flex h-full w-full items-center justify-between px-6">
        <p>간편 로그인하기</p>
        <div className="ml-2 flex gap-4">
          <a href="https://www.google.com" rel="noopener noreferrer">
            <Image
              src={ic_OauthGoogle}
              width={42}
              height={42}
              alt="google oauth login"
            />
          </a>
          <a href="https://www.kakaocorp.com/page" rel="noopener noreferrer">
            <Image
              src={ic_OauthKakao}
              width={42}
              height={42}
              alt="kakao oauth login"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SnsLogin;
