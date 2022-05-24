import { Product } from "../components/Product";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";


export default function Home() {
  return (
   <div className="overflow-hidden" >
     <Header/>
     <Main/>
     <Product/>
    <Footer/>
   </div> 
  )
}
