import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import GNB from '@/components/layout/GNB';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard-varable',
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
