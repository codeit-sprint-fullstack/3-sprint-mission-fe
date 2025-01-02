"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/common/nav/Nav";
import Footer from "@/components/common/footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// 숨길 페이지를 객체로 관리
const hiddenRoutes = {
  login: "/login",
  signup: "/signin",
};

const queryClient = new QueryClient();

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // 현재 경로가 숨길 페이지에 포함되는지 확인
  const hideNavAndFooter = Object.values(hiddenRoutes).includes(pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col pt-[75px]">
        {!hideNavAndFooter && <Nav />}
        <main className="flex-grow">{children}</main>
        {!hideNavAndFooter && <Footer />}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
