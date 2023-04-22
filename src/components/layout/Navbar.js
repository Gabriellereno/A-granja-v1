import React from 'react';
import styles from '@/styles/components/layout/navbar.module.css';
import Link from 'next/link';

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
  {
    titulo: 'Veterinário',
    url: '#',
  },
];

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
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
              <form className={styles.searchInput}>
                <input
                  type="text"
                  placeholder="Pesquise na Granja"
                  id="search"
                />

                <label htmlFor="search" type="submit">
                  <img src="/lupa.svg" alt="Lupa" />
                </label>
              </form>
            </div>
          </div>
          <div className={styles.cart}>
            <img src="/carrinho.svg" alt="Carrinho" />
            <input type="text" readOnly value="0" />
          </div>
        </div>
      </div>
      <div className={styles.underBg}>
        <div className={styles.underMenu}>
          <p>Av. Azenha, 991 - Porto Alegre, RS</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
