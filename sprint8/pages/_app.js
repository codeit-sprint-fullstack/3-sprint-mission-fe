// 사이트 전체에 css를 적용 시킬 때(className을 사용하지 않기 때문에 일반적인 방법으로 import함)
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
