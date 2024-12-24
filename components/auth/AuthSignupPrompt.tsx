import Link from "next/link";

const AuthSigninPrompt = () => {
  return (
    <p className="text-center">
      판다마켓이 처음이신가요?
      <Link href="/signin">
        <span className="ml-1 text-blue underline">회원가입</span>
      </Link>
    </p>
  );
};

export default AuthSigninPrompt;
