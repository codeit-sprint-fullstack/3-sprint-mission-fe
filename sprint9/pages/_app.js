import { useRouter } from "next/router";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Head from "next/head";
import "@/styles/globals.css";
// HomePage 관련 css 어쩔 수 없이 전역 css로 대체 함
import "@/styles/pages/HomePage/common.css";
import "@/styles/pages/HomePage/Hero.css";
import "@/styles/pages/HomePage/Section1.css";
import "@/styles/pages/HomePage/Section2.css";
import "@/styles/pages/HomePage/Section3.css";
import "@/styles/pages/HomePage/UnderBanner.css";


/**파라미터 Component, pageProps
 * Component: 각각의 페이지에 대한 컴포넌트, 페이지라고 보면 됨
 * pageProps: 컴포넌트에서 전달할 데이터를 담는 객체
 *  */
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const noLayoutPages = ['/login', '/signIn']; // Layout을 적용하지 않을 페이지 경로
  const shouldShowLayout = !noLayoutPages.includes(router.pathname);
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <link rel="icon" href="/images/icons/favicon.ico" />
        <meta name="description" content="안녕하세요 판다마켓입니다." />
      </Head>
      {shouldShowLayout &&<Header />}
      <Component {...pageProps} />
      {shouldShowLayout && <Footer />}
    </>
  )
}
