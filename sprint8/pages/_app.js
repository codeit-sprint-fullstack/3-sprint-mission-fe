import Nav from "@/components/ui/Header.jsx";
import "@/styles/globals.css";

/**파라미터 Component, pageProps
 * Component: 각각의 페이지에 대한 컴포넌트, 페이지라고 보면 됨
 * pageProps: 컴포넌트에서 전달할 데이터를 담는 객체
 *  */ 
export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
    <Component {...pageProps} />;
    </>
  )
}
