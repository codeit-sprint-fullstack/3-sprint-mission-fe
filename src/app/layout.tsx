import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "100 900",
});
const nanumsquareneo = localFont({
  src: "./fonts/NanumSquareNeo-Variable.woff2",
  display: "swap",
  variable: "--font-nanumsquareneo",
  weight: "100 300 500 700 800",
});

export const metadata: Metadata = {
  title: "판다마켓",
  description: "일상에서 모든 물건을 거래해보세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body
        className={`${pretendard.variable} ${nanumsquareneo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
