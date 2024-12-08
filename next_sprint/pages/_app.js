import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-[1560px]">
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
