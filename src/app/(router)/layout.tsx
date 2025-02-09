"use client";

import Footer from "@/src/components/shared/Footer";
import Header from "@/src/components/shared/Header";
import HeaderLogin from "@/src/components/shared/HeaderLogin";
import { useAuthStore } from "@/src/store/auth";

export default function RouterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = useAuthStore();

  return (
    <div className="flex flex-col min-h-screen">
      {userId ? <HeaderLogin /> : <Header />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
