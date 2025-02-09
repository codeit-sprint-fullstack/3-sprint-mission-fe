import BestArticle from "@/components/board/bestArticle";
import Article from "@/components/board/Article";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { JSX } from "react";

export default function Board(): JSX.Element {
  return (
    <div>
      <Header />
      <BestArticle />
      <Article />
      <Footer />
    </div>
  );
}
