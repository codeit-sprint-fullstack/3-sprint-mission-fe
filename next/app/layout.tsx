import type { Metadata } from 'next';
// import localFont from "next/font/local";
import './globals.css';
import Header from './shared/components/header';
import Footer from './shared/components/footer';
import Provider from './shared/contexts/Provider';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: '판다마켓',
  description: '판다마켓',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={``}>
        <Provider>
          <Header></Header>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
