import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles';

const pretendard = localFont({
  src: '../../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: '판다마켓',
  description: '일상에서 모든 물건을 거래해보세요',
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.variable} antialiased`}>
        <div
          id='wrap'
          className='mx-auto w-screen'
        >
          {children}
        </div>
      </body>
    </html>
  );
}
