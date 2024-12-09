import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@styles';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  weight: '45 920',
});
const nanumsquareneo = localFont({
  src: './fonts/NanumSquareNeo-Variable.woff2',
  display: 'swap',
  variable: '--font-nanumsquareneo',
  weight: '100 300 500 700 800',
});

export const metadata: Metadata = {
  title: '판다마켓',
  description: '일상에서 모든 물건을 거래해보세요',
  icons: {
    icon: '/panda.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${pretendard.variable} ${nanumsquareneo.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
