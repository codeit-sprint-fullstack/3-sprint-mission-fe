"use client";

import AuthLogo from "@/components/auth/AuthLogo";
import AuthSignupForm from "@/components/auth/AuthSignupForm";
import SnsLogin from "@/components/auth/SnsLogin";
import ErrorModal from "@/components/common/modal/ErrorModal";

const SigninPage = () => {
  return (
    <article className="px-4">
      <section className="relative mx-auto flex h-screen max-w-[640px] flex-col items-center justify-center gap-6">
        <AuthLogo />
        <AuthSignupForm />
        <SnsLogin />
        <ErrorModal />
      </section>
    </article>
  );
};

export default SigninPage;
