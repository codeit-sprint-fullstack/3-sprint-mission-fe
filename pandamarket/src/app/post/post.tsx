import RegisterOrEdit from "@/components/WriteArticle/EditRegisterPost";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { JSX } from "react";

export default function RegisterPost(): JSX.Element {
  return (
    <div>
      <Header />
      <RegisterOrEdit />
      <Footer />
    </div>
  );
}
