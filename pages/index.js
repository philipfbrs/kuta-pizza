import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import Load from "../styles/loading.module.css";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const imgs = ["./bg_main.jpg", "./pizza-main.jpeg"];
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
    <div>
      {loading ? (
        <div className={Load.ldsRing}><div></div><div></div><div></div><div></div></div>
      ) : (
        <div className="overflow-hidden">
          <Header setOpen={setOpen} open={open} />
          <Main />
          <Product />
          <Footer />
        </div>
      )}
    </div>
  );
}
