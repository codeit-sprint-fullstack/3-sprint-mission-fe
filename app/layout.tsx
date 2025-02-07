import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "판다마켓 | 안전한 중고거래 플랫폼",
  description:
    "일상의 모든 물건을 거래하는 안전한 중고거래 플랫폼. 패션, 전자기기, 가전 등 다양한 카테고리의 상품을 만나보세요. 판다마켓에서 믿을 수 있는 거래를 시작하세요.",
  keywords:
    "판다마켓, 중고거래, 중고마켓, 중고물품, 중고판매, 중고구매, 안전거래",
  metadataBase: new URL("https://panda-marketplace.vercel.app"),
  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icons/favicon/favicon.ico",
  },
  openGraph: {
    title: "판다마켓 | 안전한 중고거래 플랫폼",
    description: "일상의 모든 물건을 거래하는 안전한 중고거래 플랫폼",
    url: "https://panda-marketplace.vercel.app",
    siteName: "판다마켓",
    images: [
      {
        url: "/public/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "판다마켓 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
          <div className="flex min-h-screen flex-col">{children}</div>
        </body>
      </html>
    </>
  );
}
