"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/common/nav/Nav";
import Footer from "@/components/common/footer/Footer";

// 숨길 페이지를 객체로 관리
const hiddenRoutes = {
  login: "/login",
  signup: "/signup",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // 현재 경로가 숨길 페이지에 포함되는지 확인
  const hideNavAndFooter = Object.values(hiddenRoutes).includes(pathname);

  return (
    <div className="flex min-h-screen flex-col">
      {!hideNavAndFooter && <Nav />}
      <main className="flex-grow">{children}</main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}
