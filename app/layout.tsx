import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/common/nav/Nav";
import Footer from "@/components/common/footer/Footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "판다 마켓",
  description: "Generated by 대원",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ko" className={`${pretendard.variable} antialiased`}>
        <body className={pretendard.className}>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-grow p-4 md:p-6">{children}</main>

            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}