"use client";

import AuthLogo from "@/components/auth/AuthLogo";
import AuthLoginForm from "@/components/auth/AuthLoginForm";
import SnsLogin from "@/components/auth/SnsLogin";
import AuthSigninPrompt from "@/components/auth/AuthSignupPrompt";
import ErrorModal from "@/components/common/modal/ErrorModal";

const LoginPage = () => {
  return (
    <article className="px-4">
      <section className="relative mx-auto flex h-screen max-w-[640px] flex-col items-center justify-center gap-6">
        <AuthLogo />
        <AuthLoginForm />
        <SnsLogin />
        <AuthSigninPrompt />
        <ErrorModal />
      </section>
    </article>
  );
};

export default LoginPage;
