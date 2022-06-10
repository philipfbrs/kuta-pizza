import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import Head from "next/head";
import { Footer } from "../components/Footer";

export default function Home({ allPostsData }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href="bg_main_tqFShJ5ri.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="pizza-main_oAc0RlPJw.jpeg"
        />
      </Head>
      <div className="">
        <Header setOpen={setOpen} open={open} />
        <Main allPostsData={allPostsData} />
        <Product />
        <Footer />
      </div>
    </>
  );
}
