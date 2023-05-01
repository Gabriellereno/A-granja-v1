import { useContext, useState } from 'react';
import React from 'react';
import styles from '@/styles/components/products/ProductsPainel.module.css';
import { CartContext } from '../context/CartContext';

const ProductsPainel = ({
  title,
  produtosContext,
  filter,
  setFilter,
  cartProducts,
}) => {
  const { addProductToCart } = useContext(CartContext);
  const { removeProductFromCart } = React.useContext(CartContext);
  const [produtos, setProdutos] = React.useState([]);
  const [next, setNext] = React.useState(20);

  React.useEffect(() => {
    if (produtosContext) {
      setProdutos(produtosContext.slice(0, next));
    }
  }, [produtosContext, next]);

  return (
    <section className={styles.productsPainelBg}>
      <div className={styles.productsPainel}>
        <div className={styles.leftBar}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div className={styles.filter}>
            <label>
              <input
                type="radio"
                name="homeFilter"
                value="Ração"
                checked={filter === 'Ração'}
                onChange={() => setFilter('Ração')}
              />
              Ração
            </label>
            <label>
              <input
                type="radio"
                name="homeFilter"
                value="Petiscos e Ossos"
                checked={filter === 'PetiscosEOssos'}
                onChange={() => setFilter('PetiscosEOssos')}
              />
              Petiscos e Ossos
            </label>
            <label>
              <input
                type="radio"
                name="homeFilter"
                value="Tapetes, Fraldas e mais"
                checked={filter === 'TapetesFraldasEBanheiros'}
                onChange={() => setFilter('TapetesFraldasEBanheiros')}
              />
              Tapetes, Fraldas e mais
            </label>
          </div>
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
                      <input
                        type="button"
                        value="-"
                        onClick={() => removeProductFromCart(produto)}
                        disabled={
                          !cartProducts.some((item) => item.id === produto.id)
                        }
                      />
                      {cartProducts.some((item) => item.id === produto.id) ? (
                        <input
                          type="text"
                          value={
                            cartProducts.find((item) => item.id === produto.id)
                              .amount
                          }
                          readOnly
                        />
                      ) : (
                        <input type="text" value={0} readOnly />
                      )}

                      <input
                        type="button"
                        value="+"
                        onClick={() => addProductToCart(produto)}
                      />
                    </div>
                  </div>

                  <div className={styles.addCart}>
                    <button onClick={() => addProductToCart(produto)}>
                      {' '}
                      Adicionar
                      <img alt="bag" src="bag.svg" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.next}>
            {produtosContext
              ? next < produtosContext.length && (
                  <input
                    type="button"
                    value="Mostrar mais"
                    onClick={() => {
                      setNext(next + 20);
                    }}
                  />
                )
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPainel;
