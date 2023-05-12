import React from 'react';
import { ProductsDB } from '../products/ProductsDB';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [message, setMessage] = React.useState('oi%0aoi');
  const [homeProducts, setHomeProducts] = React.useState();
  const [propsFilter, setPropsFilter] = React.useState(false);
  const [categoryFilter, setCategoryFilter] = React.useState(false);
  const [homeFilter, setHomeFilter] = React.useState('Ração');
  const [allProducts, setAllProducts] = React.useState([]);

  /* Filtro de produtos da home inicia como ração*/
  React.useEffect(() => {
    const ifCategoryExist = categoryFilter
      ? ProductsDB[categoryFilter][homeFilter]
      : ProductsDB;
    if (categoryFilter) {
      setHomeProducts(ifCategoryExist);
      setPropsFilter(Object.keys(ProductsDB[categoryFilter]));
    } else {
      const products = Object.values(ProductsDB).flatMap((item) => {
        if (item[homeFilter]) {
          return item[homeFilter];
        } else return [];
      });
      console.log(products);
      setHomeProducts(products);
    }
  }, [homeFilter, categoryFilter]);
  //Busca  site todos os produtos
  React.useEffect(() => {
    const products = Object.values(ProductsDB).flatMap((item) => {
      return Object.values(item).flatMap((produto) => {
        return produto;
      });
    });
    setAllProducts(products);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        message,
        setMessage,
        homeProducts,
        homeFilter,
        setHomeFilter,
        setHomeProducts,
        setCategoryFilter,
        propsFilter,
        setPropsFilter,
        allProducts,
        categoryFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
