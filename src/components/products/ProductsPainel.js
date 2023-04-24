import { useContext, useState } from 'react';
import React from 'react';
import styles from '@/styles/components/products/ProductsPainel.module.css';
import { GlobalContext } from '../context/GlobalContext';

const ProductsPainel = ({ title }) => {
  const [produtos, setProdutos] = useState([]);
  const { products } = useContext(GlobalContext);

  React.useEffect(() => {
    setProdutos(products.slice(0, 20));
  }, [products]);

  const nextProduct = () => {};
  console.log(produtos);
  return (
    <section className={styles.productsPainelBg}>
      <div className={styles.productsPainel}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div>
          <div className={styles.back}></div>
          <div className={styles.products}>
            {produtos &&
              produtos.map((produto, index) => (
                <div key={index} className={styles.produtoBg}>
                  <div className={styles.produto}>
                    <img src={produto.img} alt={produto.name} />
                    <p>{produto.name}</p>

                    <div className={styles.quantity}>
                      <input type="button" value="-" />
                      <input type="text" value={produto.amount} readOnly />
                      <input type="button" value="+" />
                    </div>
                  </div>

                  <div className={styles.addCart}>
                    <button>
                      {' '}
                      Adicionar
                      <img alt="bag" src="bag.svg" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.next}></div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPainel;
