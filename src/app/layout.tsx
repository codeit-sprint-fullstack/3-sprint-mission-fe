import localFont from 'next/font/local'
import type { Metadata } from "next";
import "./globals.css";

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "판다마켓",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
