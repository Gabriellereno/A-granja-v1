import React from 'react';
import styles from '@/styles/components/layout/navbar.module.css';
import Link from 'next/link';
import { GlobalContext } from '../context/GlobalContext';
import { CartContext } from '../context/CartContext';

import Cart from '../Cart';

const menuItens = [
  {
    titulo: 'Cachorros',
    url: '#',
  },
  {
    titulo: 'Gatos',
    url: '#',
  },
  {
    titulo: 'Pássaros',
    url: '#',
  },
  {
    titulo: 'Peixes',
    url: '#',
  },
  {
    titulo: 'Outros Pets',
    url: '#',
  },
  {
    titulo: 'Casa e Jardim',
    url: '#',
  },
];

const Navbar = () => {
  const { homeProducts } = React.useContext(GlobalContext);
  const { message } = React.useContext(GlobalContext);
  const { cartAmount } = React.useContext(CartContext);
  const [menu, setMenu] = React.useState(false);
  const [cart, setCart] = React.useState(false);

  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [showProducts, setShowProducts] = React.useState(false);
  const [next, setNext] = React.useState(20);
  //fechar menu ao redimensionar
  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setMenu(false);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setMenu(false);
      });
    };
  }, []);

  //busca
  const handleSearch = (e) => {
    e.preventDefault();

    let lowerCase = e.target.value.toLowerCase().split(' ');

    const filtered = homeProducts.filter((produto) => {
      return lowerCase.every((word) =>
        produto.name.toLowerCase().includes(word),
      );
    });
    if (e.target.value.length > 0) {
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
      setShowProducts(false);
    }
  };
  //carregar mais produtos na busca
  React.useEffect(() => {
    if (filteredProducts) {
      setShowProducts(filteredProducts.slice(0, next));
    }
  }, [filteredProducts, next]);

  return (
    <>
      <div className={styles.background}>
        <div className={styles.navbar}>
          <Link href="/">
            <img
              src="/logo.jpeg"
              alt="A granja"
              width="130px"
              className={styles.logo}
            />
          </Link>

          <div className={styles.menu}>
            <nav>
              <ul className={menu ? styles.active : styles.menuItens}>
                {menuItens.map((item) => (
                  <li key={item.titulo}>
                    <Link href={item.url}>{item.titulo}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.mobile}>
              <label className={styles.menuMobile} htmlFor="check">
                <input
                  type="checkbox"
                  id="check"
                  checked={menu}
                  onChange={() => setMenu(!menu)}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <div className={styles.search}>
              <div className={styles.searchInput}>
                <input
                  type="text"
                  placeholder="Pesquise na Granja"
                  id="search"
                  onChange={(e) => handleSearch(e)}
                />

                <label htmlFor="search" type="submit">
                  <img src="/lupa.svg" alt="Lupa" />
                </label>
              </div>
            </div>
          </div>
          <div className={styles.cart} onClick={() => setCart(!cart)}>
            <img src="/carrinho.svg" alt="Carrinho" />
            <input type="text" readOnly value={cartAmount ? cartAmount : 0} />
          </div>
        </div>
      </div>
      <div className={styles.underBg}>
        <div className={styles.underMenu}>
          <p>Av. Azenha, 991 - Porto Alegre, RS</p>
        </div>
      </div>
      <div>
        <a
          className={styles.whatsappA}
          href={`https://wa.me/5551993225320?text=${message}`}
          target="_blank"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </div>
      {cart && <Cart setCart={setCart} cart={cart} />}
      {filteredProducts.length > 0 && (
        <div className={styles.filteredBg}>
          <div className={styles.filteredContainer}>
            <div className={styles.filteredProducts}>
              {showProducts.map((produto) => (
                <div key={produto.id} className={styles.filteredProduct}>
                  <img src={produto.img} alt={produto.name} />
                  <p>{produto.name}</p>
                  <div className={styles.addCart}>
                    <button>Adicionar</button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.next}>
              {filteredProducts
                ? next < filteredProducts.length && (
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
      )}
    </>
  );
};

export default Navbar;
