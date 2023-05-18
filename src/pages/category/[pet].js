import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import ProductsPainel from '@/components/products/ProductsPainel';
import { GlobalContext } from '@/components/context/GlobalContext';
import { CartContext } from '@/components/context/CartContext';
import { ProductsDB } from '@/components/products/ProductsDB';
import Head from 'next/head';

const Category = () => {
  const {
    homeProducts,
    homeFilter,
    setHomeFilter,
    setCategoryFilter,
    propsFilter,
    setPropsFilter,
    categoryFilter,
  } = React.useContext(GlobalContext);

  const { cartProducts } = React.useContext(CartContext);
  const router = useRouter();
  const { pet } = router.query;

  useEffect(() => {
    if (!pet) return;
    setHomeFilter(Object.keys(ProductsDB[pet])[0]);
    setCategoryFilter(pet);
  }, [pet]);

  const title =
    pet === 'outrosPets'
      ? 'Outros Pets'
      : pet === 'cachorros'
      ? 'Cachorros'
      : pet === 'gatos'
      ? 'Gatos'
      : pet === 'peixes'
      ? 'Peixes'
      : pet === 'casaEJardim'
      ? 'Casa e Jardim'
      : pet === 'pássaros'
      ? 'Pássaros'
      : 'Outros';
  return (
    <div>
      <Head>
        <title>Granja D'Lucca - {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <ProductsPainel
          title={title}
          produtosContext={homeProducts}
          filter={homeFilter}
          setFilter={setHomeFilter}
          cartProducts={cartProducts}
          propsFilter={propsFilter}
          setPropsFilter={setPropsFilter}
        />
      </main>
    </div>
  );
};

export default Category;
