import Head from 'next/head';
import Slide from '@/components/Slide';
import styles from '@/styles/Home.module.css';
import ProductsPainel from '@/components/products/ProductsPainel';
import { GlobalContext } from '@/components/context/GlobalContext';
import { CartContext } from '@/components/context/CartContext';

import React from 'react';

export default function Home() {
  const {
    homeProducts,
    homeFilter,
    setHomeFilter,
    propsFilter,
    setPropsFilter,
    setCategoryFilter,
  } = React.useContext(GlobalContext);

  const { cartProducts } = React.useContext(CartContext);

  React.useEffect(() => {
    setCategoryFilter(false);
    setPropsFilter(false);
    setHomeFilter('Ração');
  }, []);
  return (
    <>
      <Head>
        <title>A Granja</title>
        <meta name="description" content="A marca preferida do seu pet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Slide />
        <ProductsPainel
          title={'Mais pesquisados'}
          produtosContext={homeProducts}
          filter={homeFilter}
          setFilter={setHomeFilter}
          cartProducts={cartProducts}
          propsFilter={propsFilter}
          setPropsFilter={setPropsFilter}
        />
      </main>
    </>
  );
}
