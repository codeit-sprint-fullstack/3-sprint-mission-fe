import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Provider } from 'jotai';
import { ScreenWidthObserver } from './screenWidthObserver';
import QueryProvider from './queryProvider';
import ModalsContainer from '@/components/modal/modalsContainer';
config.autoAddCss = false;

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard-variable',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '판다마켓',
  description: '판다마켓에 오신 걸 환영합니다.',
  openGraph: {
    title: '판다마켓',
    description: '판다마켓에 오신 걸 환영합니다.',
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
        className={`${pretendard.variable} antialiased flex flex-col min-h-screen items-center`}
      >
        <QueryProvider>
          <Provider>
            <ModalsContainer />
            <ScreenWidthObserver />
            {children}
          </Provider>
        </QueryProvider>
      </body>
    </html>
  );
}
