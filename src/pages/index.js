import Head from 'next/head';
import Slide from '@/components/Slide';
import styles from '@/styles/Home.module.css';
import ProductsPainel from '@/components/products/ProductsPainel';
import { GlobalContext } from '@/components/context/GlobalContext';
import { CartContext } from '@/components/context/CartContext';

import React from 'react';

export default function Home() {
  const { homeProducts } = React.useContext(GlobalContext);
  const { homeFilter } = React.useContext(GlobalContext);
  const { setHomeFilter } = React.useContext(GlobalContext);
  const { cartProducts } = React.useContext(CartContext);

  return (
    <>
      <Head>
        <title>A Granja</title>
        <meta name="description" content="A marca preferida do seu pet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main className={styles.main}>
        <Slide />
        <ProductsPainel
          title={'Produtos'}
          produtosContext={homeProducts}
          filter={homeFilter}
          setFilter={setHomeFilter}
          cartProducts={cartProducts}
        />
      </main>
    </>
  );
}
