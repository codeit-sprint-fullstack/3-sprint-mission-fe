import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import GNB from '@/components/layout/GNB';
import Footer from '@/components/layout/Footer';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard-variable',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '판다마켓',
  description: '판다마켓에 오신 걸 환영합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.variable} antialiased`}>
        <main>
          <GNB />
          {children}
        </main>
      </body>
    </html>
  );
}
