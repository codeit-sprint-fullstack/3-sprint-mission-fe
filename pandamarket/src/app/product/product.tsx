import Header from "@/components/header";
import BestItemSection from "@/components/Product/BestItemSection";
import AllitemsSection from "@/components/Product/AllItemSection";
import Footer from "@/components/footer";
import { JSX } from "react";

export default function Market(): JSX.Element {
  return (
    <div>
      <Header />
      <BestItemSection />
      <AllitemsSection />
      <Footer />
    </div>
  );
}
