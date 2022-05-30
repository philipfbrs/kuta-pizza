import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Home({ allPostsData }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const imgs = ["https://ik.imagekit.io/rb3it67b9/bg_main_tqFShJ5ri.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653882333094", "https://ik.imagekit.io/rb3it67b9/pizza-main_oAc0RlPJw.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1653882760689"];
    cacheImage(imgs);
  }, []);
  const cacheImage = async (srcArray) => {
    const promise = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promise);
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        null
      ) : (
        <div className="overflow-hidden">
          <Header setOpen={setOpen} open={open} />
          <Main allPostsData={allPostsData} />
          <Product />
          <Footer />
        </div>
      )}
    </>
  );
}
