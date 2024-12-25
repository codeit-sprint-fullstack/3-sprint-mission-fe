import "@/styles/globals.css";
import "@/styles/aaa.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="inner">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
