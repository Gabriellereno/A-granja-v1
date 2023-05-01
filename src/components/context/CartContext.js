import React, { useEffect } from 'react';
import { GlobalContext } from './GlobalContext';

export const CartContext = React.createContext();

export const CartStorage = ({ children }) => {
  const { setHomeProducts } = React.useContext(GlobalContext);
  const { homeProducts } = React.useContext(GlobalContext);
  const [pageProducts, setPageProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [cartAmount, setCartAmount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  //Pega os produtos do localStorage, adiciona-os no carrinho, adiciona a quantidade de itens do carrinho no icone de carrinho no Navbar, seta a quantidade
  useEffect(
    () => {
      const storageProducts = JSON.parse(localStorage.getItem('cartProducts'));
      if (storageProducts) {
        setCartProducts(storageProducts);
        setCartAmount(storageProducts.length);
        // if (homeProducts && isLoading) {
        //   setHomeProducts(
        //     homeProducts.map((homeProduct) => {
        //       const productInStorage = storageProducts.find(
        //         ({ id }) => id === homeProduct.id,
        //       );
        //       if (productInStorage) {
        //         return { ...homeProduct, amount: productInStorage.amount };
        //       } else return homeProduct;
        //     }),
        //   );
        //   setIsLoading(false);
        // }
      }
    },
    [
      /* homeProducts */
    ],
  );

  //total de itens no carrinho que aparece no icone do carrinho no Navbar (não o total x quantidade)
  const incrementCartAmount = () => {
    setCartAmount(cartAmount + 1);
  };
  const decrementCartAmount = () => {
    setCartAmount(cartAmount - 1);
  };

  const addProductToCart = (product) => {
    const productInCart = cartProducts.find(({ id }) => id === product.id);
    //se o produto já estiver no carrinho, incrementa a quantidade apenas.

    if (productInCart) {
      const objToIncrementPropAmount = {
        ...productInCart,
        amount: productInCart.amount + 1,
      };
      refreshAmount(objToIncrementPropAmount);
    } else {
      const newProduct = { ...product, amount: 1 };
      setCartProducts([...cartProducts, newProduct]);
      // setHomeProducts(
      //   homeProducts.map((homeProduct) => {
      //     if (homeProduct.id === product.id) {
      //       return { ...homeProduct, amount: newProduct.amount };
      //     } else return homeProduct;
      //   }),
      // );
      incrementCartAmount();
      localStorage.setItem(
        'cartProducts',
        JSON.stringify([...cartProducts, newProduct]),
      );
    }
  };

  const removeProductFromCart = (product) => {
    const productInCart = cartProducts.find(({ id }) => id === product.id);
    if (productInCart) {
      //se a quantidade for 1, remove o produto do carrinho
      if (productInCart.amount === 1) {
        setCartProducts(cartProducts.filter(({ id }) => id !== product.id));
        // setHomeProducts(
        //   homeProducts.map((homeProduct) => {
        //     if (homeProduct.id === product.id) {
        //       return { ...homeProduct, amount: 0 };
        //     } else return homeProduct;
        //   }),
        // );
        decrementCartAmount();
        localStorage.setItem(
          'cartProducts',
          JSON.stringify(cartProducts.filter(({ id }) => id !== product.id)),
        );
      }
      // se a quantidade for maior que 1, decrementa a quantidade
      else {
        const objToDecrementPropAmount = {
          ...productInCart,
          amount: productInCart.amount - 1,
        };
        refreshAmount(objToDecrementPropAmount);
      }
    } else throw new Error('Produto não encontrado no carrinho');
  };

  const refreshAmount = (product) => {
    const ifProductExists = homeProducts.some(({ id }) => id === product.id);
    const ifProductExistsOnCart = cartProducts.some(
      ({ id }) => id === product.id,
    );
    if (ifProductExists) {
      // setHomeProducts(
      //   homeProducts.map((homeProduct) => {
      //     if (homeProduct.id === product.id) {
      //       return { ...homeProduct, amount: product.amount };
      //     } else return homeProduct;
      //   }),
      // );

      if (ifProductExistsOnCart) {
        setCartProducts(
          cartProducts.map((cartProduct) => {
            if (cartProduct.id === product.id) {
              return { ...cartProduct, amount: product.amount };
            } else return cartProduct;
          }),
        );
        localStorage.setItem(
          'cartProducts',
          JSON.stringify(
            cartProducts.map((cartProduct) => {
              if (cartProduct.id === product.id) {
                return { ...cartProduct, amount: product.amount };
              } else return cartProduct;
            }),
          ),
        );
      }
    } else throw new Error('Produto não encontrado no carrinho');
  };

  return (
    <CartContext.Provider
      value={{
        cartAmount,
        addProductToCart,
        removeProductFromCart,
        cartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
