import React from 'react';
import styles from '@/styles/components/layout/navbar.module.css';
import Link from 'next/link';
import { GlobalContext } from '../context/GlobalContext';
import { CartContext } from '../context/CartContext';

import Cart from '../Cart';

const menuItens = [
  {
    titulo: 'Cachorros',
    url: `/category/cachorros`,
  },
  {
    titulo: 'Gatos',
    url: '/category/gatos',
  },
  {
    titulo: 'Pássaros',
    url: '/category/pássaros',
  },
  {
    titulo: 'Peixes',
    url: '/category/peixes',
  },
  {
    titulo: 'Outros Pets',
    url: '/category/outrosPets',
  },
  {
    titulo: 'Casa e Jardim',
    url: '/category/casaEJardim',
  },
];

const Navbar = () => {
  const { allProducts } = React.useContext(GlobalContext);
  const { message } = React.useContext(GlobalContext);
  const { cartAmount, addProductToCart } = React.useContext(CartContext);
  const [menu, setMenu] = React.useState(false);
  const [cart, setCart] = React.useState(false);
  const componentRef = React.useRef(null);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [show20Products, setShow20Products] = React.useState(false);
  const [next, setNext] = React.useState(20);
  const [searchText, setSearchText] = React.useState('');
  const [clearSearch, setClearSearch] = React.useState(false);
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
    setSearchText(e.target.value);

    const filtered = allProducts.filter((produto) => {
      if (produto.name) {
        return lowerCase.every((word) =>
          produto.name.toLowerCase().includes(word),
        );
      }
    });

    if (e.target.value.length > 0) {
      setFilteredProducts(filtered);
      setClearSearch(true);
    } else {
      setFilteredProducts([]);
      setShow20Products(false);
      setClearSearch(false);
    }
  };
  //show20Products recebe 20 produtos por vez de filteredProducts, next inicia como 20 e incrementa de 20 em 20 para o slice
  React.useEffect(() => {
    if (filteredProducts) {
      setShow20Products(filteredProducts.slice(0, next));
    }
  }, [filteredProducts, next]);

  //fechar caixa de resultados de pesquisaao clicar fora
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setShow20Products([]);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.comport}>
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
                    value={searchText}
                    onChange={(e) => handleSearch(e)}
                    onClick={(e) => handleSearch(e)}
                  />

                  <label htmlFor="search" type="submit">
                    {clearSearch && (
                      <input
                        type="button"
                        value="X"
                        onClick={() => {
                          setSearchText(''), setClearSearch(false), setNext(20);
                        }}
                      />
                    )}

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
            <a href="tel:5132196041">(51) 3219-6041</a>
            <div className={styles.underMenuWhatsContainer}>
              <div>
                <a
                  className={styles.underMenuWhatsappA}
                  href={`https://wa.me/5551994217207?text=Olá`}
                  target="_blank"
                >
                  <i className="fa fa-whatsapp"></i>
                </a>
              </div>
              <a href="tel:51994217207">(51) 9 9421-7207</a>
            </div>

            <p>Av. Azenha, 991 - Porto Alegre, RS</p>
          </div>
        </div>
        <div>
          <a
            className={styles.whatsappA}
            href={`https://wa.me/5551994217207?text=Olá`}
            target="_blank"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
        {cart && <Cart setCart={setCart} cart={cart} />}
        {show20Products.length > 0 && (
          <div ref={componentRef} className={styles.filteredBg}>
            <div className={styles.filteredContainer}>
              <div className={styles.filteredProducts}>
                {show20Products.map((produto) => (
                  <div key={produto.id} className={styles.filteredProduct}>
                    <img src={produto.img} alt={produto.name} />
                    <p>{produto.name}</p>
                    <div className={styles.addCart}>
                      <button onClick={() => addProductToCart(produto)}>
                        Adicionar
                      </button>
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
      </div>
      <div className={styles.beforeFixedMenu}></div>
    </>
  );
};

export default Navbar;
