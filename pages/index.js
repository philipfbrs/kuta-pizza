import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Home({ allPostsData }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const imgs = ["./bg_main.jpg", "./pizza-main.jpeg"];
    cacheImage(imgs);
  }, []);
  const cacheImage = async (srcArray) => {
    const promise = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        console.log(src);
        const img = new Image();
        console.log(src);
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
        <div>test</div>
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
