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
  propsFilter,
  setPropsFilter,
}) => {
  const { addProductToCart } = useContext(CartContext);
  const { removeProductFromCart } = React.useContext(CartContext);
  const [produtos, setProdutos] = React.useState([]);
  const [next, setNext] = React.useState(20);

  const labels = {
    Ração: 'Ração',
    PetiscosEOssos: 'Petiscos e Ossos',
    TapetesFraldasEBanheiros: 'Tapetes, Fraldas e mais',
    Farmácia: 'Farmácia',
    Brinquedos: 'Brinquedos',
    Coleiras: 'Coleiras',
    GuiasEPeitorais: 'Guias e Peitorais',
    BelezaELimpeza: 'Beleza e Limpeza',
    CamasECobertores: 'Camas e Cobertores',
    CasasETocas: 'Casas e Tocas',
    AcessóriosDeAlimentação: 'Acessórios Alimentação',
    AcessóriosDeTransporte: 'Acessórios Transporte',
    Portões: 'Portões',
    GradesEEscadas: 'Grades e Escadas',
    Roupas: 'Roupas',
    ColeirasGuiasEPeitorais: 'Coleiras, Guias e mais',
    PortõesGradesEEscadas: 'Portões, Grades e mais',
    AreiasEBanheiros: 'Areias e Banheiros',
    ArranhadoresEBrinquedos: 'Brinquedos',
    ColeirasEPeitorais: 'Coleiras e Peitorais',
    CamasAlmofadasETocas: 'Camas, Tocas e mais',
    Alimentação: 'Alimentação',
    GaiolaEviveiros: 'Gaiola e Eviveiros',
    BrinquedosEPoleiros: 'Brinquedos e Poleiros',
    Acessórios: 'Acessórios',
    EquipamentosEAcessórios: 'Equipamentos e mais',
    AquáriosEBeteiras: 'Aquários e mais',
    TratamentoDeÁgua: 'Tratamento de Água',
    Decoração: 'Decoração',
    Chinchilas: 'Chinchilas',
    Tartarugas: 'Tartarugas',
    PorquinhoDaÍndia: 'Porquinho da Índia',
    Hamster: 'Hamster',
    Coelhos: 'Coelhos',
    Jardim: 'Jardim',
    Piscina: 'Piscina',
    ControleDePragas: 'Controle de Pragas',
    CasaEAmbiente: 'Casa e Ambiente',
  };

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
            {propsFilter ? (
              propsFilter.map((item, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="filter"
                    value={item}
                    checked={filter === item}
                    onChange={() => {
                      setFilter(item), setNext(20);
                    }}
                  />
                  {labels[item]}
                </label>
              ))
            ) : (
              <>
                <label>
                  <input
                    type="radio"
                    name="homeFilter"
                    value="Ração"
                    checked={filter === 'Ração'}
                    onChange={() => {
                      setFilter('Ração'), setNext(20);
                    }}
                  />
                  Ração
                </label>
                <label>
                  <input
                    type="radio"
                    name="homeFilter"
                    value="Petiscos e Ossos"
                    checked={filter === 'PetiscosEOssos'}
                    onChange={() => {
                      setFilter('PetiscosEOssos'), setNext(20);
                    }}
                  />
                  Petiscos e Ossos
                </label>
                <label>
                  <input
                    type="radio"
                    name="homeFilter"
                    value="Tapetes, Fraldas e mais"
                    checked={filter === 'TapetesFraldasEBanheiros'}
                    onChange={() => {
                      setFilter('TapetesFraldasEBanheiros'), setNext(20);
                    }}
                  />
                  Tapetes, Fraldas e mais
                </label>
                <label>
                  <input
                    type="radio"
                    name="homeFilter"
                    value="Tapetes, Fraldas e mais"
                    checked={filter === 'Farmácia'}
                    onChange={() => {
                      setFilter('Farmácia'), setNext(20);
                    }}
                  />
                  Farmácia
                </label>
                <label>
                  <input
                    type="radio"
                    name="homeFilter"
                    value="Tapetes, Fraldas e mais"
                    checked={filter === 'Alimentação'}
                    onChange={() => {
                      setFilter('Alimentação'), setNext(20);
                    }}
                  />
                  Alimentação
                </label>
              </>
            )}
          </div>
        </div>

        <div>
          <div className={styles.back}></div>
          <div className={styles.products}>
            {produtos ? (
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
                      <img alt="bag" src="/bag.svg" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className={styles.produtoBg}>oi</div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
                <div className={styles.produtoBg}></div>
              </>
            )}
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
