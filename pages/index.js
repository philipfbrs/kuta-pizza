import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import Head from "next/head";
import { Footer } from "../components/Footer";
import axios from "axios";

export default function Home({ pizza }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="bg_main_tqFShJ5ri.jpg" />;
        {pizza.map((element) => {
          <link rel="preload" as="image" href={element.linkImagen} />;
        })}
      </Head>
      <div className="overflow-hidden">
        <Header setOpen={setOpen} open={open}  />
        <Main getPizzas = {pizza}/>
        <Footer />
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  const items = await getPizzas();
  const pizza = items.filter((el, index) => {
    return index < items.length - 17;
  });
  return {
    props: { pizza },
  };
}
const getPizzas = async () => {
  const options = {
    method: 'GET',
    url: 'https://pizzaallapala.p.rapidapi.com/productos',
    headers: {
      'X-RapidAPI-Key': 'aceb8c4d02msh8a4a3789da886dcp18d361jsn4d090afbb94f',
      'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
    }
  };
  return axios
    .request(options)
    .then(function (response) {
      return response.data.productos;
    })
    .catch(function (error) {
      return error;
    });
};
