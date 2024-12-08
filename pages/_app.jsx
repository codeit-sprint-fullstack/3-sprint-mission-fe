import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Container from "@/components/Container";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Main>
      <Footer />
    </>
  );
}
