// import Register from "@/components/registerPost";
import RegisterOrEdit from "@/components/WriteArticle/EditRegisterPost"
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function RegisterPost(){
  return(
   <div>
    <Header/>
    <RegisterOrEdit/>
    <Footer/>
   </div>
  )
}