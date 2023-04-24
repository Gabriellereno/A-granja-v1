import React from 'react';
import { ProductsDB } from '../products/ProductsDB';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [message, setMessage] = React.useState('oi');
  const [products, setProducts] = React.useState(
    ProductsDB.cachorros.TapetesFraldasEBanheiros,
  );

  return (
    <GlobalContext.Provider
      value={{ message, setMessage, products, setProducts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
