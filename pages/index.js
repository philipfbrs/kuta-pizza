import { useState } from "react";
import { Product } from "../components/Product";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";


export default function Home() {
  const [open, setOpen] = useState(false)
  return (
   <div className="overflow-hidden" >
     <Header setOpen={setOpen} open={open}/>
     <Main/>
     <Product/>
    <Footer/>
   </div> 
  )
}
