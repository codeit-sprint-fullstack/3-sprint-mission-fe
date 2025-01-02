import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Container from "@/components/Container";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isLoginPage = router.pathname === "/login";
  const isSignUpPage = router.pathname === "/signup";

  return (
    <>
      {!isLoginPage && !isSignUpPage && <Nav />}
      <Main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Main>
      {!isLoginPage && !isSignUpPage && <Footer />}
    </>
  );
}
