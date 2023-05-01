import React, { useEffect } from 'react';
import styles from '@/styles/components/cart.module.css';
import { CartContext } from '@/components/context/CartContext';

const Cart = ({ setCart, cart }) => {
  const { addProductToCart } = React.useContext(CartContext);
  const { removeProductFromCart } = React.useContext(CartContext);
  const { cartProducts } = React.useContext(CartContext);

  const [toRight, setToRight] = React.useState(false);
  const [deliveryOption, setDeliveryOption] = React.useState('Retirar');
  const [adress, setAdress] = React.useState();

  const handleAnimateCartExit = () => {
    if (cart && !toRight) {
      setToRight(true);
      setTimeout(() => {
        setCart(false);
        setToRight(false);
      }, 300);
    } else return null;
  };

  function handleDeliveryOptionChange(event) {
    setDeliveryOption(event.target.value);
  }

  function handleAdressChange(event) {
    setAdress(event.target.value);
  }

  return (
    <div className={toRight ? styles.toRight : styles.cartBg}>
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <div className={styles.cartTitle}>
            <h1>Carrinho</h1>
          </div>
          <div className={styles.cartClose}>
            <input type="button" value="X" onClick={handleAnimateCartExit} />
          </div>
        </div>
        <div className={styles.cartProducts}>
          {cartProducts &&
            cartProducts.map((product) => (
              <div key={product.id} className={styles.cartProduct}>
                <img src={product.img} />
                <p>{product.name.split(' ').slice(0, 3).join(' ')}</p>
                <div className={styles.quantity}>
                  <input
                    type="button"
                    value="-"
                    onClick={() => removeProductFromCart(product)}
                    disabled={product.amount === 0}
                  />
                  <input type="text" value={product.amount} readOnly />
                  <input
                    type="button"
                    value="+"
                    onClick={() => addProductToCart(product)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.cartFinalizar}>
        <div className={styles.cartInfoClient}>
          <div className={styles.cartInfoClientTitle}>
            <h2>Informações da entrega</h2>
          </div>
          <div className={styles.cartInfoClientInputs}>
            <label>
              <input
                type="radio"
                name="entrega"
                id="entrega"
                value="Retirar"
                checked={deliveryOption === 'Retirar'}
                onChange={handleDeliveryOptionChange}
              />{' '}
              Retirar na loja
            </label>
            <label>
              <input
                type="radio"
                name="entrega"
                id="entrega"
                value="TeleEntrega"
                checked={deliveryOption === 'TeleEntrega'}
                onChange={handleDeliveryOptionChange}
              />{' '}
              Tele entrega
            </label>
            {deliveryOption === 'TeleEntrega' && (
              <div>
                <label>
                  Endereço:
                  <input
                    type="text"
                    value={adress}
                    onChange={handleAdressChange}
                    placeholder="Ex: Av Azenha, 991 bl 7 apto 100, Azenha, POA"
                  />
                </label>
              </div>
            )}

            <h2>Pagamento:</h2>
            <label>
              <input
                type="radio"
                name="pagamento"
                id="pagamento"
                value="Dinheiro"
              />{' '}
              Dinheiro
            </label>
            <label>
              <input type="radio" name="pagamento" id="pagamento" value="Pix" />{' '}
              Pix
            </label>
            <label>
              <input
                type="radio"
                name="pagamento"
                id="pagamento"
                value="Cartão"
              />{' '}
              Cartão de crédito
            </label>
          </div>
        </div>
        <input
          type="button"
          value="Enviar pedido"
          className={styles.cartPurchase}
        />
      </div>
    </div>
  );
};

export default Cart;
