import BestArticle from "@/components/board/bestArticle"
import Article from "@/components/board/Article"
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function Board(){
  return(
    <div>
      <Header/>
      <BestArticle/>
      <Article/>
      <Footer/>
    </div>
  )
}