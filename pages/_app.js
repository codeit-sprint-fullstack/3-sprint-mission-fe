import Header from "../components/common/Header.js";
import Footer from "../components/common/Footer.js";
import globals from "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}
