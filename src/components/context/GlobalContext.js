import React from 'react';
import { ProductsDB } from '../products/ProductsDB';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [message, setMessage] = React.useState('oi');
  const [homeProducts, setHomeProducts] = React.useState();
  const [homeFilter, setHomeFilter] = React.useState('Ração');

  /* Filtro de produtos da home inicia como ração*/
  React.useEffect(() => {
    let a = Object.values(ProductsDB).flatMap((item) => {
      return item[homeFilter];
    });
    setHomeProducts(a);
  }, [homeFilter]);

  return (
    <GlobalContext.Provider
      value={{
        message,
        setMessage,
        homeProducts,
        homeFilter,
        setHomeFilter,
        setHomeProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
