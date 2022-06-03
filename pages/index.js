import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Home({ allPostsData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <link  rel="preload" as="image" crossOrigin="anonymous" href="bg_main_tqFShJ5ri.jpg" />
      <Header setOpen={setOpen} open={open} />
      <Main allPostsData={allPostsData} />
      <Product />
      <Footer />
    </div>
  );
}
