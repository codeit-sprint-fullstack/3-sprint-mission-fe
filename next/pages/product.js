import Header from "@/components/header"
import BestItemSection from "@/components/Product/BestItemSection"
import AllitemsSection from "@/components/Product/AllItemSection"
import Pagination from "@/components/Product/Pagination"
import Footer from "@/components/footer"

export default function Market(){
   return(
      <div>
         <Header/>
         <BestItemSection/>
         <AllitemsSection/>
         <Pagination/>
         <Footer/>
      </div>
   )
}