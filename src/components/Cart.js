import React, { useEffect } from 'react';
import styles from '@/styles/components/cart.module.css';
import { CartContext } from '@/components/context/CartContext';

const Cart = ({ setCart, cart }) => {
  const { addProductToCart } = React.useContext(CartContext);
  const { removeProductFromCart } = React.useContext(CartContext);
  const { cartProducts } = React.useContext(CartContext);

  const [toRight, setToRight] = React.useState(false);
  const [name, setName] = React.useState('');
  const [deliveryOption, setDeliveryOption] = React.useState('Retirar');
  const [address, setAddress] = React.useState('');
  const [payment, setPayment] = React.useState('Dinheiro');
  //Animação de saída do componente Cart, ao click ele troca a className para uma animação right e após o timeout seta o cart como false bem como remove a className right.
  const handleAnimateCartExit = () => {
    if (cart && !toRight) {
      setToRight(true);
      setTimeout(() => {
        setCart(false);
        setToRight(false);
      }, 300);
    } else return null;
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDeliveryOptionChange = (event) => {
    setDeliveryOption(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[a-zA-Z]+\s.*[0-9]+.*$/;
    if (name === '' || name.length <= 3) {
      alert('Por favor, insira seu nome corretamente.');
    } else if (
      (deliveryOption === 'TeleEntrega' && address === '') ||
      (deliveryOption === 'TeleEntrega' && !regex.test(address))
    ) {
      alert('Por favor, insira seu endereço corretamente.');
    } else {
      alert(
        'A loja terminará de lhe atender pelo WhatsApp, se estiver pelo computador selecione: Iniciar conversa, Após isso selecione: Usar o WhatsApp Web (caso não tenha instalado no seu computador).',
      );
      const formattedItens = cartProducts
        .map((product, index) => {
          const itemIndex = `${(index + 1).toString().padStart(2, '0')}`;
          return `${itemIndex} - ${product.name}, Qnt: ${product.amount} unid.`;
        })
        .join('%0a');

      const formattedName = `Cliente: ${name}`;
      const formattedDelivery = `Tipo de entrega: ${deliveryOption}`;
      const formattedAdress =
        deliveryOption === 'TeleEntrega'
          ? `Endereço de entrega: ${address}`
          : '';
      const formattedPayment = `Pagamento em: ${payment}`;

      const result = `${formattedName}%0a${formattedDelivery}%0a${formattedAdress}%0a${formattedPayment}%0a%0a${formattedItens}%0a`;

      window.open(`https://wa.me/5551993225320?text=${result}`);
    }
  };
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
                <p>{product.name.split(' ').slice(0, 6).join(' ')}</p>
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
      <form className={styles.cartFinalizar} onSubmit={handleSubmit}>
        <div className={styles.cartInfoClient}>
          <div className={styles.cartInfoClientTitle}>
            <h2>Informações da entrega</h2>
          </div>
          <div className={styles.cartInfoClientInputs}>
            <label className={styles.labelText}>
              Nome:
              <input
                type="text"
                value={name}
                placeholder="Ex: Maria"
                onChange={handleNameChange}
              />{' '}
            </label>
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
                <label className={styles.labelText}>
                  Endereço:
                  <input
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
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
                onChange={handlePaymentChange}
                checked={payment === 'Dinheiro'}
              />{' '}
              Dinheiro
            </label>
            <label>
              <input
                type="radio"
                name="pagamento"
                id="pagamento"
                value="Pix"
                onChange={handlePaymentChange}
                checked={payment === 'Pix'}
              />{' '}
              Pix
            </label>
            <label>
              <input
                type="radio"
                name="pagamento"
                id="pagamento"
                value="Cartão"
                onChange={handlePaymentChange}
                checked={payment === 'Cartão'}
              />{' '}
              Cartão de crédito
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Enviar pedido"
          className={styles.cartPurchase}
        />
      </form>
    </div>
  );
};

export default Cart;
